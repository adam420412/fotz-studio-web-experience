import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, X, Send, ArrowUpRight } from "lucide-react";
import { answerQuestion, assistantTopics } from "@/data/business.mjs";
type Message = { text: string; own?: boolean; links?: { label: string; href: string }[] };
export function ChatbotFAQ() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const input = useRef<HTMLInputElement>(null);
  const log = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => { if (open) input.current?.focus(); }, [open]);
  useEffect(() => { if (log.current) log.current.scrollTop = log.current.scrollHeight; }, [messages]);
  function close() { setOpen(false); requestAnimationFrame(() => trigger.current?.focus()); }
  function ask(text: string) {
    if (!text.trim()) return;
    const answer = answerQuestion(text.trim());
    setMessages(previous => [...previous.slice(-18), { text: text.trim(), own: true }, { text: answer.answer, links: answer.links }]);
    setQuestion("");
  }
  return <>
    <button ref={trigger} type="button" aria-label="Otwórz asystenta FOTZ" aria-expanded={open} aria-controls="fotz-assistant"
      onClick={() => setOpen(value => !value)} className={`fixed bottom-24 right-4 md:right-6 z-40 h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center ${open ? "invisible" : ""}`}>
      <MessageCircle className="w-6 h-6" />
    </button>
    {open && <section id="fotz-assistant" role="dialog" aria-label="Asystent FOTZ" onKeyDown={e => { if (e.key === "Escape") close(); }}
      className="fixed bottom-4 right-4 z-50 w-[360px] max-w-[calc(100vw-2rem)] max-h-[calc(100dvh-6rem)] flex flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl">
      <header className="flex items-center justify-between gap-3 bg-primary px-4 py-4 text-primary-foreground">
        <div><h2 className="text-base font-semibold">Asystent FOTZ</h2><p className="text-xs opacity-80">Usługi, kontakt i współpraca</p></div>
        <button type="button" onClick={close} aria-label="Zamknij asystenta FOTZ" className="p-2 rounded-md hover:bg-white/10"><X className="w-5 h-5" /></button>
      </header>
      <div ref={log} role="log" aria-live="polite" aria-relevant="additions" className="overflow-y-auto p-4 space-y-3 min-h-0 max-h-[48dvh]">
        <p className="text-sm text-muted-foreground">Cześć! Wybierz temat lub zapytaj o nasze usługi.</p>
        {!messages.length && <div className="grid gap-2">{assistantTopics.slice(0,4).map(topic => <button type="button" key={topic.question} onClick={() => ask(topic.question)} className="text-left text-sm p-3 rounded-lg border border-border hover:bg-secondary">{topic.question}</button>)}</div>}
        {messages.map((message, index) => <div key={index} className={`rounded-xl p-3 text-sm leading-relaxed break-words ${message.own ? "bg-primary text-primary-foreground ml-7" : "bg-secondary mr-3"}`}>
          {message.text}
          {message.links && <div className="grid gap-2 mt-3">{message.links.map(link => /^tel:|^mailto:|\.pdf$/.test(link.href)
            ? <a key={link.href} href={link.href} className="underline underline-offset-4 font-medium">{link.label}</a>
            : <Link key={link.href} to={link.href} onClick={close} className="underline underline-offset-4 font-medium">{link.label}</Link>)}</div>}
        </div>)}
      </div>
      <form onSubmit={e => { e.preventDefault(); ask(question); }} className="flex gap-2 p-3 border-t border-border">
        <input ref={input} value={question} onChange={e => setQuestion(e.target.value)} aria-label="Zadaj pytanie" placeholder="Zadaj pytanie…" maxLength={500} className="min-w-0 flex-1 rounded-lg border border-input bg-background px-3 py-3 text-base" />
        <button type="submit" disabled={!question.trim()} aria-label="Wyślij pytanie" className="p-3 rounded-lg bg-primary text-primary-foreground disabled:opacity-40"><Send className="w-5 h-5" /></button>
      </form>
      <Link to="/kontakt" onClick={close} className="flex items-center justify-center gap-2 text-sm underline py-3 border-t border-border">Kontakt z zespołem <ArrowUpRight className="w-4 h-4" /></Link>
    </section>}
  </>;
}
