# Verificação do projeto — 13/11/2026

## Resultado

O Codex reconhece a pasta `C:\Users\carlo\Documents\NEMESIS-CATALOGO-PREMIUM` e consegue ler `AGENTS.md` e `README.md`.

O projeto ainda não está executável: a pasta não contém `index.html`, `Catalogo_Nemesis_Premium_V4.html`, `package.json`, vídeos, imagens, PDF ou repositório Git.

## Testes realizados

- Estrutura da pasta conferida.
- `AGENTS.md` e `README.md` lidos.
- Busca local por `Catalogo_Nemesis_Premium_V4.html` e `Apresentacao_Reorganizada.pdf` realizada nos diretórios de trabalho; nenhum dos dois foi encontrado.
- Busca por vídeos HTML foi realizada; existem vídeos em projetos NÊMESIS NFC separados, mas eles não foram copiados para evitar mistura de projetos e uso indevido de recursos.
- Não foi possível executar testes de navegador, layout, links, vídeos, skeleton ou painel porque o código-fonte ainda não foi importado.

## Pendência bloqueadora

Transferir o arquivo `Catalogo_Nemesis_Premium_V4.html` para esta pasta e renomeá-lo para `index.html`. Os recursos incorporados ou fornecidos junto com esse HTML também precisam ser transferidos para subpastas do próprio projeto.

Depois disso, validar:

1. abertura local em desktop e celular;
2. quatro vídeos e seus controles;
3. preços e links reais dos biosites;
4. acessibilidade, carregamento e `prefers-reduced-motion`;
5. edição local e limites do protótipo;
6. publicação HTTPS somente após revisão.

## Observação de segurança

Nenhum arquivo de outros projetos foi alterado ou copiado. A folha mestre e as artes NFC também não foram modificadas.
