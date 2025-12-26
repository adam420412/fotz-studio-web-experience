import { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { useAdminMaterials, MaterialFormData, AcademyMaterial } from '@/hooks/useAdminMaterials';
import { useAdminSubscriptions, Subscription } from '@/hooks/useAdminSubscriptions';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Edit, Trash2, BookOpen, Users, CreditCard, Loader2, ArrowLeft } from 'lucide-react';
import { FileUploadField } from '@/components/admin/FileUploadField';

const MaterialForm = ({ 
  material, 
  onSubmit, 
  onClose 
}: { 
  material?: AcademyMaterial; 
  onSubmit: (data: MaterialFormData) => Promise<boolean>;
  onClose: () => void;
}) => {
  const [formData, setFormData] = useState<MaterialFormData>({
    title: material?.title || '',
    description: material?.description || '',
    type: (material?.type as MaterialFormData['type']) || 'ebook',
    file_url: material?.file_url || '',
    video_url: material?.video_url || '',
    thumbnail_url: material?.thumbnail_url || '',
    is_published: material?.is_published ?? false,
    sort_order: material?.sort_order || 0,
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const success = await onSubmit(formData);
    setSubmitting(false);
    if (success) onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Tytuł *</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
          className="bg-background/50 border-border/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Opis</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="bg-background/50 border-border/50"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="type">Typ *</Label>
        <Select value={formData.type} onValueChange={(v) => setFormData({ ...formData, type: v as MaterialFormData['type'] })}>
          <SelectTrigger className="bg-background/50 border-border/50">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ebook">E-book / PDF</SelectItem>
            <SelectItem value="video">Wideo</SelectItem>
            <SelectItem value="course">Kurs</SelectItem>
            <SelectItem value="template">Szablon</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <FileUploadField
        label="Miniatura"
        value={formData.thumbnail_url}
        onChange={(url) => setFormData({ ...formData, thumbnail_url: url })}
        accept="image/*"
        folder="thumbnails"
      />

      {formData.type === 'video' || formData.type === 'course' ? (
        <FileUploadField
          label="Plik wideo"
          value={formData.video_url}
          onChange={(url) => setFormData({ ...formData, video_url: url })}
          accept="video/*"
          folder="videos"
        />
      ) : (
        <FileUploadField
          label="Plik (PDF, ZIP)"
          value={formData.file_url}
          onChange={(url) => setFormData({ ...formData, file_url: url })}
          accept=".pdf,.zip,application/pdf,application/zip"
          folder="ebooks"
        />
      )}

      <div className="space-y-2">
        <Label htmlFor="sort_order">Kolejność</Label>
        <Input
          id="sort_order"
          type="number"
          value={formData.sort_order}
          onChange={(e) => setFormData({ ...formData, sort_order: parseInt(e.target.value) || 0 })}
          className="bg-background/50 border-border/50"
        />
      </div>

      <div className="flex items-center gap-3">
        <Switch
          id="is_published"
          checked={formData.is_published}
          onCheckedChange={(checked) => setFormData({ ...formData, is_published: checked })}
        />
        <Label htmlFor="is_published">Opublikowany</Label>
      </div>

      <div className="flex gap-3 pt-4">
        <Button type="button" variant="outline" onClick={onClose} className="flex-1">
          Anuluj
        </Button>
        <Button type="submit" disabled={submitting} className="flex-1 bg-primary text-primary-foreground">
          {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : material ? 'Zapisz' : 'Dodaj'}
        </Button>
      </div>
    </form>
  );
};

const MaterialsTab = () => {
  const { materials, loading, createMaterial, updateMaterial, deleteMaterial } = useAdminMaterials();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingMaterial, setEditingMaterial] = useState<AcademyMaterial | undefined>();

  const handleCreate = async (data: MaterialFormData) => {
    return await createMaterial(data);
  };

  const handleUpdate = async (data: MaterialFormData) => {
    if (!editingMaterial) return false;
    return await updateMaterial(editingMaterial.id, data);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Czy na pewno chcesz usunąć ten materiał?')) {
      await deleteMaterial(id);
    }
  };

  const openEditDialog = (material: AcademyMaterial) => {
    setEditingMaterial(material);
    setDialogOpen(true);
  };

  const openCreateDialog = () => {
    setEditingMaterial(undefined);
    setDialogOpen(true);
  };

  const typeLabels: Record<string, string> = {
    ebook: 'E-book',
    video: 'Wideo',
    course: 'Kurs',
    template: 'Szablon',
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Materiały</h2>
          <p className="text-muted-foreground text-sm">{materials.length} materiałów w bazie</p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openCreateDialog} className="bg-primary text-primary-foreground">
              <Plus className="w-4 h-4 mr-2" />
              Dodaj materiał
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card border-border">
            <DialogHeader>
              <DialogTitle>{editingMaterial ? 'Edytuj materiał' : 'Nowy materiał'}</DialogTitle>
            </DialogHeader>
            <MaterialForm
              material={editingMaterial}
              onSubmit={editingMaterial ? handleUpdate : handleCreate}
              onClose={() => setDialogOpen(false)}
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-card/50 rounded-xl border border-border/50 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-border/50">
              <TableHead className="text-muted-foreground">Tytuł</TableHead>
              <TableHead className="text-muted-foreground">Typ</TableHead>
              <TableHead className="text-muted-foreground">Status</TableHead>
              <TableHead className="text-muted-foreground">Kolejność</TableHead>
              <TableHead className="text-muted-foreground text-right">Akcje</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {materials.map((material) => (
              <TableRow key={material.id} className="border-border/50">
                <TableCell className="font-medium text-foreground">{material.title}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="bg-secondary/50">
                    {typeLabels[material.type] || material.type}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={material.is_published ? 'default' : 'outline'} 
                    className={material.is_published ? 'bg-green-500/20 text-green-400 border-green-500/30' : ''}>
                    {material.is_published ? 'Opublikowany' : 'Szkic'}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{material.sort_order}</TableCell>
                <TableCell className="text-right">
                  <div className="flex gap-2 justify-end">
                    <Button size="sm" variant="ghost" onClick={() => openEditDialog(material)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive" onClick={() => handleDelete(material.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {materials.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-12 text-muted-foreground">
                  Brak materiałów. Dodaj pierwszy!
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

const SubscriptionsTab = () => {
  const { subscriptions, loading, updateSubscriptionStatus } = useAdminSubscriptions();

  const statusLabels: Record<string, { label: string; className: string }> = {
    active: { label: 'Aktywna', className: 'bg-green-500/20 text-green-400 border-green-500/30' },
    cancelled: { label: 'Anulowana', className: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
    expired: { label: 'Wygasła', className: 'bg-red-500/20 text-red-400 border-red-500/30' },
    pending: { label: 'Oczekująca', className: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pl-PL', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  const activeCount = subscriptions.filter(s => s.status === 'active').length;
  const totalRevenue = subscriptions
    .filter(s => s.status === 'active')
    .reduce((sum, s) => sum + (s.price_pln / 100), 0);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-card/50 border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
              <Users className="w-4 h-4" />
              Wszystkie subskrypcje
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-foreground">{subscriptions.length}</p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              Aktywne
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-400">{activeCount}</p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              Przychód miesięczny
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">{totalRevenue.toFixed(0)} PLN</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-card/50 rounded-xl border border-border/50 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-border/50">
              <TableHead className="text-muted-foreground">ID użytkownika</TableHead>
              <TableHead className="text-muted-foreground">Status</TableHead>
              <TableHead className="text-muted-foreground">Cena</TableHead>
              <TableHead className="text-muted-foreground">Data rozpoczęcia</TableHead>
              <TableHead className="text-muted-foreground">Wygasa</TableHead>
              <TableHead className="text-muted-foreground text-right">Akcje</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subscriptions.map((subscription) => (
              <TableRow key={subscription.id} className="border-border/50">
                <TableCell className="font-mono text-xs text-muted-foreground">
                  {subscription.user_id.slice(0, 8)}...
                </TableCell>
                <TableCell>
                  <Badge className={statusLabels[subscription.status]?.className || ''}>
                    {statusLabels[subscription.status]?.label || subscription.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-foreground">{(subscription.price_pln / 100).toFixed(0)} PLN</TableCell>
                <TableCell className="text-muted-foreground">{formatDate(subscription.starts_at)}</TableCell>
                <TableCell className="text-muted-foreground">
                  {subscription.expires_at ? formatDate(subscription.expires_at) : '—'}
                </TableCell>
                <TableCell className="text-right">
                  <Select 
                    value={subscription.status} 
                    onValueChange={(v) => updateSubscriptionStatus(subscription.id, v)}
                  >
                    <SelectTrigger className="w-32 bg-background/50 border-border/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Aktywna</SelectItem>
                      <SelectItem value="cancelled">Anulowana</SelectItem>
                      <SelectItem value="expired">Wygasła</SelectItem>
                      <SelectItem value="pending">Oczekująca</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
            {subscriptions.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-12 text-muted-foreground">
                  Brak subskrypcji
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

const AkademiaAdmin = () => {
  const { isAdmin, loading } = useAdminAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return <Navigate to="/akademia" replace />;
  }

  return (
    <>
      <Helmet>
        <title>Panel Administracyjny | Akademia FOTZ</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link to="/akademia/panel">
                  <Button variant="ghost" size="icon">
                    <ArrowLeft className="w-5 h-5" />
                  </Button>
                </Link>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">Panel Administracyjny</h1>
                  <p className="text-muted-foreground">Zarządzaj materiałami i subskrypcjami Akademii</p>
                </div>
              </div>
            </div>

            <Tabs defaultValue="materials" className="space-y-6">
              <TabsList className="bg-card/50 border border-border/50">
                <TabsTrigger value="materials" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Materiały
                </TabsTrigger>
                <TabsTrigger value="subscriptions" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Subskrypcje
                </TabsTrigger>
              </TabsList>

              <TabsContent value="materials">
                <MaterialsTab />
              </TabsContent>

              <TabsContent value="subscriptions">
                <SubscriptionsTab />
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AkademiaAdmin;
