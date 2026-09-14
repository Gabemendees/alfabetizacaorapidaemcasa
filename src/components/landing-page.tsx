import { useState } from "react";
import {
  BookOpen,
  Check,
  ChevronRight,
  CircleCheck,
  FileText,
  Heart,
  Medal,
  Printer,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
  X,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const SALES_CONFIG = {
  basic: { name: "100 Atividades de Alfabetização", price: "R$9,90", checkoutUrl: "#" },
  complete: {
    name: "300 Atividades de Alfabetização",
    oldPrice: "R$39,90",
    price: "R$19,90",
    checkoutUrl: "#",
  },
  upsell: { price: "R$14,90", checkoutUrl: "#" },
} as const;

const activities = [
  {
    title: "Ligue a figura ao nome",
    text: "Associação visual para fixar palavras.",
    icon: Heart,
    tone: "mint",
  },
  {
    title: "Junte as sílabas",
    text: "Primeiros passos para formar palavras.",
    icon: Sparkles,
    tone: "purple",
  },
  {
    title: "Complete a palavra",
    text: "Letras que faltam viram descobertas.",
    icon: BookOpen,
    tone: "orange",
  },
  {
    title: "Caça-palavras",
    text: "Atenção e leitura em uma brincadeira.",
    icon: Star,
    tone: "pink",
  },
  {
    title: "Organize as letras",
    text: "Raciocínio para construir cada palavra.",
    icon: Trophy,
    tone: "mint",
  },
  {
    title: "Leia e desenhe",
    text: "Leitura, imaginação e criatividade juntas.",
    icon: FileText,
    tone: "purple",
  },
] as const;

const tones = {
  mint: "bg-brand-mint-soft text-brand-mint",
  purple: "bg-brand-purple-soft text-brand-purple",
  orange: "bg-brand-orange-soft text-brand-orange",
  pink: "bg-brand-pink-soft text-brand-pink",
} as const;

const bonuses = [
  {
    title: "Mapa de Progresso com Adesivos",
    text: "Para a criança acompanhar sua evolução.",
    icon: Trophy,
    tone: "orange",
  },
  {
    title: "Certificado de Conclusão",
    text: "Para imprimir quando a criança terminar o caderno.",
    icon: Medal,
    tone: "purple",
  },
  {
    title: "Guia Rápido para os Pais",
    text: "Como aplicar as atividades no dia a dia.",
    icon: Users,
    tone: "mint",
  },
  {
    title: "Plano de Aplicação de 30 Dias",
    text: "Um cronograma com a sequência diária das atividades.",
    icon: FileText,
    tone: "pink",
  },
] as const;

const testimonials = [
  {
    name: "Mariana S.",
    city: "Campinas, SP",
    initials: "MS",
    text: "Virou nosso momento favorito do dia. As atividades são claras e meu filho pede para fazer mais.",
  },
  {
    name: "Rafael M.",
    city: "Curitiba, PR",
    initials: "RM",
    text: "Eu não sabia por onde começar. Com as fichas prontas, ficou fácil acompanhar a evolução em casa.",
  },
  {
    name: "Juliana A.",
    city: "Salvador, BA",
    initials: "JA",
    text: "Em poucas semanas ela já reconhecia sílabas que antes confundia. Material bonito e muito prático.",
  },
  {
    name: "Camila R.",
    city: "Goiânia, GO",
    initials: "CR",
    text: "Imprimo só o que vamos usar e seguimos no ritmo dela. Foi um ótimo apoio para nossa rotina.",
  },
] as const;

const faqs = [
  [
    "Como recebo o material?",
    "Você recebe o link para baixar por e-mail assim que o pagamento for aprovado.",
  ],
  [
    "O material é físico ou digital?",
    "É 100% digital. Você baixa o PDF e pode imprimir em casa quantas vezes quiser.",
  ],
  [
    "Para qual idade é indicado?",
    "As atividades foram pensadas para crianças de 3 a 7 anos, respeitando diferentes etapas da alfabetização.",
  ],
  [
    "Preciso imprimir colorido?",
    "Não. Todo o material foi preparado para funcionar muito bem em impressão preto e branco.",
  ],
  [
    "E se eu não gostar?",
    "Você tem 7 dias de garantia e pode solicitar o reembolso total, sem burocracia.",
  ],
  [
    "Qual a diferença entre os pacotes?",
    "O pacote de R$ 9,90 tem 100 atividades. O de R$ 19,90 é o material completo, com 300 atividades e mais variedade.",
  ],
] as const;

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="mb-3 text-sm font-extrabold uppercase text-brand-purple">{eyebrow}</p>
      <h2 className="text-3xl font-black leading-tight text-foreground md:text-4xl">{title}</h2>
      {text ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text}</p>
      ) : null}
    </div>
  );
}

function HeroBannerPlaceholder() {
  return (
    <div
      className="aspect-[16/7] w-full rounded-2xl border-2 border-dashed border-border bg-card shadow-sm"
      role="img"
      aria-label="Espaço reservado para a imagem principal do material"
    />
  );
}

function ActivitiesSection() {
  return (
    <section className="bg-card px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Aprendizado passo a passo"
          title="O que tem dentro do material"
          text="Atividades variadas para a criança desenvolver leitura, escrita e confiança no próprio ritmo."
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {activities.map(({ title, text, icon: Icon, tone }) => (
            <article
              key={title}
              className="overflow-hidden rounded-2xl border border-border bg-background p-3 shadow-sm md:p-4"
            >
              <div
                className={cn(
                  "flex aspect-[3/4] items-center justify-center rounded-xl",
                  tones[tone],
                )}
              >
                <div className="text-center">
                  <Icon className="mx-auto size-12 stroke-[1.5] md:size-16" />
                  <div className="mx-auto mt-5 h-2 w-20 rounded-full bg-current opacity-30" />
                  <div className="mx-auto mt-2 h-2 w-14 rounded-full bg-current opacity-20" />
                </div>
              </div>
              <h3 className="mt-4 text-base font-extrabold leading-tight md:text-lg">{title}</h3>
              <p className="mt-1 hidden text-sm text-muted-foreground sm:block">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BonusSection() {
  return (
    <section className="bg-brand-purple-soft/50 px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Mais valor para sua família" title="E ainda tem bônus" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bonuses.map(({ title, text, icon: Icon, tone }) => (
            <article
              key={title}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-sm"
            >
              <span className="absolute right-3 top-3 z-10 max-w-[9rem] rounded-full bg-brand-pink px-3 py-1 text-center text-[0.65rem] font-extrabold uppercase leading-tight text-primary-foreground">
                Grátis, bônus incluso
              </span>
              <div
                className={cn(
                  "mb-5 flex aspect-[4/3] items-center justify-center rounded-xl",
                  tones[tone],
                )}
                role="img"
                aria-label={`Espaço reservado para a imagem de ${title}`}
              >
                <Icon className="size-12 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-extrabold leading-tight">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="bg-card px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Histórias reais de aprendizado" title="Quem já usou, aprovou" />
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map(({ name, city, text }) => (
            <article key={name} className="rounded-2xl border border-border bg-background p-6">
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="size-12 shrink-0 rounded-full border-2 border-dashed border-brand-mint bg-card"
                  role="img"
                  aria-label={`Espaço reservado para a foto de ${name}`}
                />
                <div>
                  <h3 className="font-extrabold">{name}</h3>
                  <p className="text-xs text-muted-foreground">{city}</p>
                </div>
                <div className="ml-auto flex" aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={`${name}-${i}`}
                      className="size-4 fill-brand-orange text-brand-orange"
                    />
                  ))}
                </div>
              </div>
              <p className="leading-relaxed text-muted-foreground">“{text}”</p>
            </article>
          ))}
        </div>
        <p className="mt-5 text-center text-xs text-muted-foreground">
          * Nomes e depoimentos ilustrativos. Substitua pelos relatos reais dos seus clientes.
        </p>
      </div>
    </section>
  );
}

function OfferCard({ complete, onBuy }: { complete?: boolean; onBuy: () => void }) {
  const product = complete ? SALES_CONFIG.complete : SALES_CONFIG.basic;
  const bullets = complete
    ? [
        "300 atividades completas",
        "O triplo de conteúdo do pacote básico",
        "Tudo do pacote básico, mais rimas, textos curtos, interpretação e desafios de leitura",
        "Maior variedade de atividades, com menos repetição no dia a dia",
        "Melhor custo benefício por atividade",
      ]
    : [
        "100 atividades para imprimir",
        "Atividades de letras, sílabas, palavras e frases",
        "Ideal para quem está começando agora",
        "Fácil de imprimir em casa, em preto e branco",
      ];
  return (
    <article
      className={cn(
        "relative flex flex-col rounded-3xl bg-card p-6 shadow-lg md:p-8",
        complete
          ? "border-2 border-brand-purple md:scale-[1.03]"
          : "border border-border",
      )}
    >
      {complete ? (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-purple px-5 py-2 text-xs font-black uppercase text-primary-foreground">
          Mais vendido, recomendado
        </span>
      ) : null}
      <span
        className={cn(
          "mb-5 self-start rounded-full px-3 py-1.5 text-xs font-black uppercase",
          complete
            ? "bg-brand-mint-soft text-brand-mint"
            : "bg-brand-orange text-primary-foreground",
        )}
      >
        {complete ? "50% OFF" : "Promoção por tempo limitado"}
      </span>
      <h3 className="text-2xl font-black leading-tight">{product.name}</h3>
      {complete ? (
        <p className="mt-4 text-sm font-bold leading-relaxed text-brand-purple">
          O pacote completo, com tudo que seu filho precisa para aprender a ler do início ao fim.
        </p>
      ) : null}
      <div className="my-6">
        {complete ? (
          <p className="mb-1 text-sm text-muted-foreground">
            de <span className="line-through">{SALES_CONFIG.complete.oldPrice}</span> por
          </p>
        ) : (
          <p className="mb-1 text-sm text-muted-foreground">pagamento único de</p>
        )}
        <p
          className={cn("text-5xl font-black", complete ? "text-brand-purple" : "text-foreground")}
        >
          {product.price}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">sem mensalidade</p>
      </div>
      <ul className="mb-7 flex-1 space-y-3">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3 text-sm leading-relaxed">
            <CircleCheck className="mt-0.5 size-5 shrink-0 text-brand-mint" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <Button
        size="lg"
        onClick={onBuy}
        className={cn(
          "h-14 w-full rounded-xl text-base font-extrabold shadow-md",
          complete && "bg-brand-purple text-primary-foreground hover:bg-brand-purple/90",
        )}
      >
        {complete ? "Quero o completo por R$19,90" : "Quero este por R$9,90"}
        <ChevronRight />
      </Button>
    </article>
  );
}

function OfferSection({ onBasic, onComplete }: { onBasic: () => void; onComplete: () => void }) {
  return (
    <section id="oferta" className="scroll-mt-4 bg-brand-mint-soft/60 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Escolha o melhor para seu filho"
          title="Comece hoje, no ritmo da sua família"
          text="Acesso imediato ao PDF. Compre uma vez e use sempre que precisar."
        />
        <div className="grid items-stretch gap-8 pt-3 md:grid-cols-2">
          <OfferCard onBuy={onBasic} />
          <OfferCard complete onBuy={onComplete} />
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-bold text-muted-foreground">
          <span className="flex items-center gap-2">
            <ShieldCheck className="size-5 text-brand-mint" />
            Compra segura
          </span>
          <span className="flex items-center gap-2">
            <FileText className="size-5 text-brand-purple" />
            Acesso imediato
          </span>
          <span className="flex items-center gap-2">
            <Printer className="size-5 text-brand-orange" />
            Pronto para imprimir
          </span>
        </div>
      </div>
    </section>
  );
}

function UpsellDialog({
  open,
  onOpenChange,
  onAccept,
  onDecline,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAccept: () => void;
  onDecline: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] w-[calc(100%-2rem)] overflow-y-auto rounded-3xl border-0 p-0 sm:max-w-lg">
        <div className="bg-brand-orange-soft px-6 py-4 text-center">
          <span className="inline-flex items-center gap-2 text-sm font-black uppercase text-brand-orange">
            <Sparkles className="size-4" />
            Oferta exclusiva desta tela
          </span>
        </div>
        <div className="p-6 sm:p-8">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-black leading-tight sm:text-3xl">
              Espera, adicione o pacote completo com desconto exclusivo
            </DialogTitle>
            <DialogDescription className="pt-3 text-center text-base leading-relaxed">
              Em vez de 100, receba as <strong className="text-foreground">300 atividades</strong> e
              todos os bônus.
            </DialogDescription>
          </DialogHeader>
          <div className="my-6 rounded-2xl bg-brand-purple-soft p-5 text-center">
            <p className="text-sm text-muted-foreground">
              de <span className="line-through">{SALES_CONFIG.complete.price}</span> por apenas
            </p>
            <p className="mt-1 text-5xl font-black text-brand-purple">
              {SALES_CONFIG.upsell.price}
            </p>
            <p className="mt-2 text-xs font-bold uppercase text-brand-purple">
              Você economiza mais agora
            </p>
          </div>
          <div className="space-y-3">
            <Button
              size="lg"
              onClick={onAccept}
              className="h-auto min-h-14 w-full whitespace-normal rounded-xl px-4 py-3 text-base font-extrabold"
            >
              Sim, quero upgrade por R$14,90
            </Button>
            <Button
              size="lg"
              variant="ghost"
              onClick={onDecline}
              className="h-auto min-h-12 w-full whitespace-normal rounded-xl px-4 py-3 text-sm text-muted-foreground"
            >
              Não, quero só as 100 atividades
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function LandingPage() {
  const [showUpsell, setShowUpsell] = useState(false);
  const [upsellAccepted, setUpsellAccepted] = useState(false);
  const goToCheckout = (url: string) => {
    window.location.href = url;
  };
  const acceptUpsell = () => {
    setUpsellAccepted(true);
    setShowUpsell(false);
    goToCheckout(SALES_CONFIG.upsell.checkoutUrl);
  };
  const declineUpsell = () => {
    setUpsellAccepted(false);
    setShowUpsell(false);
    goToCheckout(SALES_CONFIG.basic.checkoutUrl);
  };

  return (
    <main className="overflow-hidden">
      <section className="relative flex min-h-screen items-center px-5 py-12 md:py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-pink-soft px-4 py-2 text-sm font-extrabold text-brand-pink">
              <Sparkles className="size-4" />
              Aprender juntos fica mais leve
          </div>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.08] text-foreground md:text-6xl">
            Seu filho pode aprender a ler em casa, com só{" "}
            <span className="text-brand-purple">15 minutos por dia</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Fichas prontas para imprimir, sem inventar nada, sem mensalidade. Você imprime, a
            criança aprende brincando.
          </p>
          <div className="mt-8 w-full">
            <HeroBannerPlaceholder />
          </div>
          <Button
            asChild
            size="lg"
            className="mt-8 h-14 w-full rounded-xl text-base font-extrabold shadow-lg sm:w-auto"
          >
            <a href="#oferta">
              Quero ajudar meu filho a ler <ChevronRight />
            </a>
          </Button>
          <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-bold text-muted-foreground">
            <span className="flex items-center gap-2">
              <Check className="size-4 text-brand-mint" />
              Para 3 a 7 anos
            </span>
            <span className="flex items-center gap-2">
              <Check className="size-4 text-brand-mint" />
              Impressão em preto e branco
            </span>
          </div>
        </div>
      </section>
      <ActivitiesSection />
      <BonusSection />
      <TestimonialsSection />
      <OfferSection
        onBasic={() => setShowUpsell(true)}
        onComplete={() => goToCheckout(SALES_CONFIG.complete.checkoutUrl)}
      />
      <section className="bg-brand-purple px-5 py-16 text-primary-foreground md:py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center md:flex-row md:text-left">
          <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-card/15">
            <ShieldCheck className="size-10" />
          </div>
          <div>
            <p className="text-sm font-extrabold uppercase opacity-80">Sua compra protegida</p>
            <h2 className="mt-2 text-3xl font-black">Garantia incondicional de 7 dias</h2>
            <p className="mt-3 max-w-2xl leading-relaxed opacity-90">
              Conheça o material com tranquilidade. Se não fizer sentido para sua família, basta
              solicitar o reembolso total em até 7 dias, sem burocracia.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-card px-5 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Tire suas dúvidas" title="Perguntas frequentes" />
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map(([question, answer], index) => (
              <AccordionItem
                key={question}
                value={`faq-${index}`}
                className="rounded-xl border border-border bg-background px-5"
              >
                <AccordionTrigger className="py-5 text-base font-extrabold hover:no-underline">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 pr-6 text-base leading-relaxed text-muted-foreground">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-12 text-center">
            <p className="font-bold">Pronto para começar?</p>
            <Button
              asChild
              size="lg"
              className="mt-4 h-14 rounded-xl px-7 text-base font-extrabold"
            >
              <a href="#oferta">
                Ver as opções <ChevronRight />
              </a>
            </Button>
          </div>
        </div>
      </section>
      <footer className="border-t border-border bg-background px-5 py-8 text-center text-sm text-muted-foreground">
        <p className="font-extrabold text-foreground">Atividades de Alfabetização</p>
        <p className="mt-1">Aprender em casa, um pequeno passo por dia.</p>
      </footer>
      <UpsellDialog
        open={showUpsell}
        onOpenChange={setShowUpsell}
        onAccept={acceptUpsell}
        onDecline={declineUpsell}
      />
      <span className="sr-only" aria-live="polite">
        {upsellAccepted ? "Upgrade selecionado" : ""}
      </span>
    </main>
  );
}
