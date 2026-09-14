# Landing page — Atividades de Alfabetização

## Objetivo
Criar uma página de vendas única, mobile-first, com sete blocos em rolagem vertical, linguagem acolhedora para pais e visual lúdico sem parecer infantil.

## Estrutura
1. **Abertura:** promessa principal, texto de apoio, botão com rolagem suave e mockup leve da capa do PDF.
2. **Conteúdo do material:** grade com seis exemplos de fichas A4, usando ilustrações leves criadas em CSS/ícones.
3. **Bônus:** três benefícios com ícones, descrição e selo de bônus incluso.
4. **Depoimentos:** quatro relatos fictícios claramente editáveis, com avatares ilustrados e cinco estrelas.
5. **Oferta:** dois planos, com destaque para o pacote de 300 atividades e CTAs independentes.
6. **Garantia:** selo visual e explicação objetiva da garantia de sete dias.
7. **FAQ:** seis perguntas em acordeão acessível.

## Interações
- Rolagem suave do primeiro CTA até as ofertas.
- Clique no plano de 100 atividades abre um modal de upgrade.
- Aceitar o upgrade define `upsellAccepted` e encaminha ao link configurado para a oferta de R$14,90.
- Recusar encaminha ao checkout padrão de R$9,90.
- O plano completo segue diretamente ao checkout normal de R$19,90.
- Modal fecha por botão, clique fora e tecla Escape; acordeão funciona por teclado.

## Configuração fácil
Centralizar nomes, preços e links de checkout em um único objeto no início do arquivo da página, mantendo `#` até os links reais serem fornecidos.

## Direção visual
- Paleta semântica quente: verde-água, roxo suave, laranja e rosa sobre fundo creme.
- Tipografia grande, cartões compactos, cantos arredondados e bastante espaço em branco.
- Ícones de linha e ilustrações leves, sem imagens externas ou arquivos pesados.
- Layout em uma coluna no celular e grades progressivas em telas maiores.

## Qualidade
- Metadados próprios da página para busca e compartilhamento.
- Estrutura semântica, foco visível, textos alternativos e contraste adequado.
- Validar compilação e conferir visual e interações em tamanhos de celular e desktop.

## Arquivos previstos
- `src/styles.css`
- `src/routes/index.tsx`
- `src/routes/__root.tsx`
