# Migração post-cactus → cactus_v2_next

## Resumo da Migração

Este projeto foi convertido do repositório `post-cactus` (Vite + React) para `cactus_v2_next` mantendo toda a funcionalidade em Vite puro.

### O que foi migrado:

✅ **Estrutura Completa:**
- 74 arquivos TypeScript/TSX
- 8 páginas: Home, PublicHome, Blog, Sobre, Contato, Dashboard, Login, NotFound
- 53 componentes UI do shadcn/ui
- 5 componentes customizados: Header, Footer, ErrorBoundary, ManusDialog, Map
- Contextos: ThemeContext
- Hooks customizados: useComposition, useMobile, usePersistFn
- Utilitários: lib/utils.ts

✅ **Configurações:**
- Vite como bundler
- Wouter para roteamento SPA
- Tailwind CSS 4 com @tailwindcss/vite
- TypeScript 5.6.3
- React 19.2.1 + React DOM 19.2.1
- Todas as dependências do projeto original

✅ **Roteamento:**
- `/` → PublicHome (página pública)
- `/blog` → Blog
- `/sobre` → Sobre
- `/contato` → Contato
- `/login` → Login
- `/posts` → Home (criação de posts)
- `/dashboard` → Dashboard
- `/404` → NotFound

## Estrutura de Arquivos

```
cactus_v2_next/
├── client/
│   ├── public/          # Arquivos estáticos
│   ├── src/
│   │   ├── components/  # Componentes UI e customizados
│   │   ├── pages/       # Páginas da aplicação
│   │   ├── contexts/    # React contexts
│   │   ├── hooks/       # Custom hooks
│   │   ├── lib/         # Utilitários
│   │   ├── App.tsx      # Componente raiz com roteamento
│   │   ├── main.tsx     # Entry point
│   │   ├── const.ts     # Constantes
│   │   └── index.css    # Estilos globais
│   └── index.html       # HTML template
├── server/              # Servidor Express (placeholder)
├── shared/              # Constantes compartilhadas
├── package.json         # Dependências
├── vite.config.ts       # Configuração Vite
└── tsconfig.json        # Configuração TypeScript
```

## Como Usar

### Desenvolvimento
```bash
pnpm install
pnpm dev
```

O servidor iniciará em `http://localhost:3000` (ou próxima porta disponível).

### Build Produção
```bash
pnpm build
```

Gera arquivos em `dist/public/` para servir estaticamente.

### Verificar Tipos
```bash
pnpm check
```

### Formatar Código
```bash
pnpm format
```

## Notas Importantes

1. **Roteamento:** O projeto usa Wouter para roteamento client-side (SPA). Todas as rotas são gerenciadas em `client/src/App.tsx`.

2. **Temas:** O projeto suporta temas light/dark através de `ThemeContext`. Configure em `client/src/App.tsx` com `defaultTheme="light"` ou `"dark"`.

3. **Componentes UI:** Todos os 53 componentes shadcn/ui estão disponíveis em `client/src/components/ui/`.

4. **Estilos:** Tailwind CSS 4 com suporte a variáveis CSS. Configure cores em `client/src/index.css`.

5. **Autenticação:** O projeto inclui suporte a OAuth através de `const.ts` com função `getLoginUrl()`.

6. **Mapa:** Componente `Map.tsx` integrado com Google Maps via proxy Manus.

## Dependências Principais

- **React 19.2.1** - Framework UI
- **Vite 7.1.7** - Bundler
- **Tailwind CSS 4** - Estilos
- **Wouter 3.3.5** - Roteamento
- **Radix UI** - Componentes primitivos
- **Framer Motion** - Animações
- **React Hook Form** - Formulários
- **Zod** - Validação
- **Lucide React** - Ícones
- **Recharts** - Gráficos
- **Sonner** - Toasts

## Próximos Passos

1. Customize as cores em `client/src/index.css`
2. Adicione suas fontes Google em `client/index.html`
3. Configure variáveis de ambiente em `.env.local`
4. Implemente lógica de autenticação em `pages/Login.tsx`
5. Customize componentes conforme necessário

## Suporte

Para dúvidas sobre a migração ou estrutura, consulte:
- `client/src/App.tsx` - Roteamento e estrutura
- `client/src/index.css` - Configuração de temas
- `package.json` - Dependências e scripts
