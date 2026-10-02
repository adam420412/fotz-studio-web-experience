"""Generate the public campaign checklist. Requires reportlab and Arial TTF fonts.
Usage: python scripts/generate-campaign-checklist.py [font-directory]
The generated PDF is a committed static asset; this script is not part of CI.
"""
from pathlib import Path
import sys
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

ROOT = Path(__file__).resolve().parents[1]
fonts = Path(sys.argv[1]) if len(sys.argv) > 1 else Path('/System/Library/Fonts/Supplemental')
for name, filename in [('Body', 'Arial.ttf'), ('Bold', 'Arial Bold.ttf')]:
    pdfmetrics.registerFont(TTFont(name, str(fonts / filename)))
output = ROOT / 'output/pdf/checklista-kampanii-fotz-studio.pdf'
output.parent.mkdir(parents=True, exist_ok=True)
c = canvas.Canvas(str(output), pagesize=(595.28, 841.89), pageCompression=1)
c.setTitle('Checklista kampanii reklamowej | FOTZ Studio')
c.setAuthor('FOTZ Studio')
c.setSubject('10 punktów do sprawdzenia przed uruchomieniem i oceną kampanii')
navy, pink, ink, muted = map(HexColor, ['#0F3053', '#75143F', '#172B3C', '#4E5D6A'])
body = ParagraphStyle('body', fontName='Body', fontSize=10.4, leading=15, textColor=muted)
items = [
 ('Cel i kanał reklamowy', 'Zapisz jeden główny cel: zapytanie, rezerwacja albo zakup. Wybierz kanał odpowiadający temu, gdzie i jak klient szuka Twojej oferty. Nie uruchamiaj wszystkich kanałów jednocześnie.'),
 ('Odbiorca i oferta', 'Określ, do kogo mówisz, jaki problem rozwiązujesz i dlaczego warto wybrać Twoją ofertę. Sprawdź, czy reklama i strona docelowa przekazują tę samą obietnicę.'),
 ('Budżet i granice testu', 'Rozdziel środki na emisję reklam, przygotowanie treści i obsługę. Ustal limit wydatków, czas testu oraz warunek zatrzymania kampanii. Zapisz, jaki koszt pozyskania klienta ma sens dla Twojej firmy.'),
 ('Kreacje i strona docelowa', 'Przygotuj różne pomysły na komunikat i czytelne wezwanie do działania. Otwórz stronę na telefonie: sprawdź tekst, zdjęcia, formularz, link telefonu i podziękowanie po wysłaniu.'),
 ('Pomiar i zgody', 'Sprawdź zdarzenia pomiarowe oraz zasady uruchamiania tagów zgodnie z wyborem zgód użytkownika. Oddziel kliknięcie przycisku od wysłania formularza i zakupu. Dodaj spójne oznaczenia UTM.'),
 ('Plan testów A/B', 'Zapisz hipotezę, np. czy pokazanie procesu buduje więcej zainteresowania niż zdjęcie produktu. Zmieniaj jedną istotną rzecz naraz. Przed testem ustal, po jakich danych podejmiesz decyzję.'),
 ('Wskaźniki i jakość kontaktów', 'Połącz dane reklam z informacją o jakości zapytań i sprzedaży. Sam zasięg, liczba kliknięć lub tanie formularze nie dowodzą rentowności. Ustal, kto sprawdzi dalszy los każdego kontaktu.'),
 ('Remarketing i dalsza obsługa', 'Sprawdź, czy masz odbiorców i podstawy do ponownego kontaktu. Dopasuj komunikat do etapu decyzji. Wyklucz osoby, dla których oferta jest już nieaktualna, i zaplanuj obsługę nowych zapytań.'),
 ('Atrybucja i rentowność', 'Porównuj ten sam okres i sposób przypisania sprzedaży. Nie sumuj bez sprawdzenia konwersji raportowanych przez różne platformy. Oddziel przychód od marży i uwzględnij wszystkie koszty działań.'),
 ('Decyzja o skalowaniu', 'Zwiększaj budżet na podstawie potwierdzonej jakości kontaktów lub sprzedaży. Po zmianie obserwuj koszt pozyskania i wydolność obsługi. Zapisz wnioski: co kontynuujesz, co poprawiasz, co kończysz.'),
]
def paragraph(text, x, top, width, style=body):
    p = Paragraph(text, style)
    _, h = p.wrap(width, 1000)
    p.drawOn(c, x, top-h)
    return h

def header(page, title, subtitle):
    c.setFillColor(navy); c.rect(0, 831.89, 595.28, 10, fill=1, stroke=0)
    c.setFillColor(pink); c.setFont('Bold', 12); c.drawString(44, 788, 'FOTZ STUDIO')
    c.setFillColor(muted); c.setFont('Body', 9); c.drawRightString(551, 788, 'MATERIAŁ DO PRACY / 10 PUNKTÓW')
    c.setFillColor(ink); c.setFont('Bold', 27); c.drawString(44, 738, title)
    paragraph(subtitle, 44, 714, 507)
    c.setStrokeColor(HexColor('#DDE2E6')); c.line(44, 58, 551, 58)
    c.setFillColor(muted); c.setFont('Body', 8.5); c.drawString(44, 39, 'fotz-studio.pl  |  Checklista kampanii reklamowej')
    c.drawRightString(551, 39, f'{page} / 2')
    c.linkURL('https://www.fotz-studio.pl', (44, 34, 130, 48), relative=0)

for page in (1, 2):
    header(page, 'Zanim włączysz kampanię' if page == 1 else 'Zanim zwiększysz budżet',
           'Zaznacz wykonane zadania. Przy brakach zapisz osobę odpowiedzialną i termin.' if page == 1 else 'Sprawdź wyniki i zapisz wnioski przed kolejną decyzją o wydatkach.')
    top = 654
    for idx, (title, text) in enumerate(items[(page-1)*5:page*5], start=(page-1)*5+1):
        c.setStrokeColor(pink); c.setLineWidth(1); c.roundRect(44, top-13, 12, 12, 2, fill=0, stroke=1)
        c.setFillColor(pink); c.setFont('Bold', 10); c.drawString(68, top-10, f'{idx:02d}')
        c.setFillColor(ink); c.setFont('Bold', 12); c.drawString(93, top-10, title)
        paragraph(text, 93, top-24, 458)
        top -= 98
    c.setFillColor(HexColor('#F2F4F6')); c.roundRect(44, 78, 507, 73, 8, fill=1, stroke=0)
    if page == 1:
        c.setFillColor(ink); c.setFont('Bold', 10); c.drawString(59, 130, 'Do ustalenia przed startem:')
        c.setStrokeColor(HexColor('#B8C2CA')); c.line(59, 107, 536, 107); c.line(59, 89, 536, 89)
    else:
        c.setFillColor(ink); c.setFont('Bold', 10); c.drawString(59, 130, 'Chcesz przejść przez plan razem z nami?')
        paragraph('Opisz cel kampanii i dotychczasowe działania. Porozmawiajmy o zakresie prac.', 59, 119, 477)
        c.setFillColor(pink); c.setFont('Bold', 10); c.drawString(59, 89, 'fotz-studio.pl/konsultacja')
        c.linkURL('https://www.fotz-studio.pl/konsultacja', (59, 85, 250, 100), relative=0)
    c.showPage()
c.save()
(ROOT / 'public/downloads/checklista-kampanii-fotz-studio.pdf').write_bytes(output.read_bytes())
print(output)
