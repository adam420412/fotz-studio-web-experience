import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFileUpload } from '@/hooks/useFileUpload';
import { Upload, X, FileText, Image, Loader2 } from 'lucide-react';

interface FileUploadFieldProps {
  label: string;
  value: string;
  onChange: (url: string) => void;
  accept?: string;
  folder?: string;
  placeholder?: string;
}

export const FileUploadField = ({
  label,
  value,
  onChange,
  accept = '*/*',
  folder = 'materials',
  placeholder = 'https://...',
}: FileUploadFieldProps) => {
  const { uploadFile, uploading } = useFileUpload();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);

  const handleFileSelect = async (file: File) => {
    const url = await uploadFile(file, folder);
    if (url) {
      onChange(url);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFileSelect(files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFileSelect(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const clearFile = () => {
    onChange('');
  };

  const isImage = value && (value.includes('.jpg') || value.includes('.jpeg') || value.includes('.png') || value.includes('.webp'));

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      
      {value ? (
        <div className="flex items-center gap-3 p-3 bg-background/50 border border-border/50 rounded-lg">
          {isImage ? (
            <img src={value} alt="" className="w-12 h-12 object-cover rounded" />
          ) : (
            <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <p className="text-sm text-foreground truncate">{value.split('/').pop()}</p>
            <p className="text-xs text-muted-foreground">Przesłano pomyślnie</p>
          </div>
          <Button type="button" variant="ghost" size="icon" onClick={clearFile}>
            <X className="w-4 h-4" />
          </Button>
        </div>
      ) : (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`
            border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer
            ${dragOver ? 'border-primary bg-primary/5' : 'border-border/50 hover:border-primary/50'}
            ${uploading ? 'opacity-50 pointer-events-none' : ''}
          `}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept={accept}
            onChange={handleInputChange}
            className="hidden"
          />
          
          {uploading ? (
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
              <p className="text-sm text-muted-foreground">Przesyłanie...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Upload className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-foreground">Kliknij lub przeciągnij plik</p>
                <p className="text-xs text-muted-foreground mt-1">PDF, ZIP, JPG, PNG, MP4 do 50MB</p>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground">lub wklej URL:</span>
        <Input
          type="url"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 bg-background/50 border-border/50 text-sm h-8"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
