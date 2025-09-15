# Demo VS Code Extensions

Dự án demo này minh họa cách sử dụng và cấu hình 6 VS Code extensions phổ biến và hữu ích cho việc phát triển web.

## 🚀 Extensions được demo

### 1. EditorConfig for VS Code

**Mô tả:** Đồng bộ hóa cài đặt editor giữa các developer và IDE khác nhau.

**File cấu hình:** `.editorconfig`

**Tính năng:**

- Thiết lập charset (UTF-8)
- Quy định kiểu indentation (tabs/spaces)
- Kiểm soát end-of-line characters
- Tự động thêm newline cuối file
- Loại bỏ trailing spaces

**Demo trong project:**

- Quy tắc chung cho tất cả file: tabs, UTF-8, LF
- Quy tắc riêng cho JS/TS: 2 spaces, max 100 chars
- Quy tắc đặc biệt cho Vue, JSON, CSS

### 2. Prettier - Code formatter

**Mô tả:** Tự động format code theo style nhất quán.

**File cấu hình:** `.prettierrc`, `.prettierignore`

**Tính năng:**

- Format JavaScript, TypeScript, Vue, CSS, JSON
- Tự động sửa indentation, spacing, quotes
- Loại bỏ semicolon không cần thiết
- Sắp xếp imports và properties

**Commands:**

```bash
npm run format        # Format tất cả files
npm run format:check  # Kiểm tra formatting
```

**Demo trong project:**

- File `src/index.ts` có formatting không đúng cố ý
- Chạy Prettier sẽ tự động sửa

### 3. ESLint

**Mô tả:** Phát hiện và sửa lỗi code, enforce coding standards.

**File cấu hình:** `.eslintrc.json`, `.eslintignore`

**Tính năng:**

- Phát hiện syntax errors
- Enforce coding conventions
- Tích hợp với TypeScript và Vue
- Tự động fix một số lỗi

**Commands:**

```bash
npm run lint      # Lint tất cả files
npm run lint:fix  # Lint và tự động fix
```

**Demo trong project:**

- `src/index.ts` có các lỗi ESLint cố ý:
  - console.log statements (warnings)
  - formatting issues
  - unused variables

### 4. Stylelint

**Mô tả:** Linter mạnh mẽ cho CSS, SCSS, và Sass files.

**File cấu hình:** `.stylelintrc.json`, `.stylelintignore`

**Tính năng:**

- Phát hiện lỗi CSS/SCSS syntax
- Enforce coding conventions cho styles
- Hỗ trợ SCSS, Sass syntax
- Auto-fix nhiều loại lỗi styling
- Tích hợp với PostCSS

**Commands:**

```bash
npm run lint:css      # Lint CSS/SCSS files
npm run lint:css:fix  # Lint và auto-fix styles
```

**Demo trong project:**

- `src/styles-demo.css` có 11 lỗi CSS cố ý:
  - Named colors thay vì hex codes
  - Duplicate selectors
  - Class naming không đúng pattern
  - Single-line declarations
- `src/styles-demo.scss` có 4 lỗi SCSS cố ý:
  - Named colors trong variables/rules
  - Invalid @import positions

### 5. Trailing Spaces

**Mô tả:** Highlight và loại bỏ spaces thừa cuối dòng.

**Tính năng:**

- Highlight trailing spaces bằng màu đỏ
- Command để xóa tất cả trailing spaces
- Tự động xóa khi save (nếu cấu hình)

**Demo trong project:**

- File `src/trailing-spaces-demo.js` có nhiều trailing spaces cố ý
- Extension sẽ highlight các spaces này
- Sử dụng Command Palette > "Trailing Spaces: Delete" để xóa

### 6. Vetur

**Mô tả:** Vue.js tooling cho VS Code - syntax highlighting, IntelliSense, debugging.

**Tính năng:**

- Syntax highlighting cho .vue files
- IntelliSense cho Vue APIs
- Error checking trong template và script
- Formatting cho Vue components
- Snippets cho Vue development

**Demo trong project:**

- File `src/UserComponent.vue` là component Vue 3 đầy đủ
- Sử dụng Composition API với TypeScript
- Template với v-for, v-if, event handling
- Styled components với scoped CSS

## 📁 Cấu trúc Project

```
plugin-vscode/
├── .editorconfig          # EditorConfig rules
├── .prettierrc           # Prettier configuration
├── .prettierignore       # Files to ignore by Prettier
├── .eslintrc.json        # ESLint rules và configuration
├── .eslintignore         # Files to ignore by ESLint
├── .stylelintrc.json     # Stylelint configuration
├── .stylelintignore      # Files to ignore by Stylelint
├── tsconfig.json         # TypeScript configuration
├── package.json          # Dependencies và scripts
├── README.md             # Documentation
└── src/
    ├── index.ts              # TypeScript demo với formatting issues
    ├── UserComponent.vue     # Vue component demo cho Vetur
    ├── trailing-spaces-demo.js # JavaScript demo với trailing spaces
    ├── styles-demo.css       # CSS demo với lỗi styling
    └── styles-demo.scss      # SCSS demo với lỗi styling
```

## 🛠️ Cài đặt và Sử dụng

### 1. Cài đặt Dependencies

```bash
npm install
```

### 2. Cài đặt VS Code Extensions

Tìm và cài đặt các extensions sau trong VS Code:

1. **EditorConfig for VS Code** - `editorconfig.editorconfig`
2. **Prettier - Code formatter** - `esbenp.prettier-vscode`
3. **ESLint** - `dbaeumer.vscode-eslint`
4. **Stylelint** - `stylelint.vscode-stylelint`
5. **Trailing Spaces** - `shardulm94.trailing-spaces`
6. **Vetur** - `octref.vetur`

### 3. Cấu hình VS Code Settings

Thêm vào `settings.json` của workspace:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.format.enable": true,
  "eslint.validate": ["javascript", "typescript", "vue"],
  "css.validate": false,
  "scss.validate": false,
  "stylelint.validate": ["css", "scss", "sass"],
  "stylelint.enable": true,
  "vetur.format.defaultFormatter.js": "prettier",
  "vetur.format.defaultFormatter.ts": "prettier",
  "trailing-spaces.trimOnSave": true
}
```

## 🧪 Testing Extensions

### Test EditorConfig:

1. Mở file mới, kiểm tra indentation tự động theo rules
2. Copy/paste code với indentation khác, VS Code sẽ tự điều chỉnh

### Test Prettier:

1. Mở `src/index.ts`
2. Command Palette > "Format Document" hoặc `Shift+Alt+F`
3. Xem code được format tự động

### Test ESLint:

1. Mở `src/index.ts`
2. Xem các squiggly lines đỏ/vàng indicating lỗi
3. Hover để xem error messages
4. Chạy `npm run lint:fix` để auto-fix

### Test Trailing Spaces:

1. Mở `src/trailing-spaces-demo.js`
2. Xem các dots đỏ ở cuối dòng (trailing spaces)
3. Command Palette > "Trailing Spaces: Delete"

### Test Stylelint:

1. Mở `src/styles-demo.css` hoặc `src/styles-demo.scss`
2. Xem các squiggly lines đỏ indicating lỗi CSS/SCSS
3. Hover để xem error messages chi tiết
4. Chạy `npm run lint:css:fix` để auto-fix
5. Command Palette > "Stylelint: Fix all auto-fixable problems"

### Test Vetur:

1. Mở `src/UserComponent.vue`
2. Kiểm tra syntax highlighting
3. Test autocomplete trong `<template>` và `<script>`
4. Hover trên Vue APIs để xem documentation

## 📝 Scripts Commands

````bash
# Development
npm run dev           # Chạy TypeScript với ts-node (Development mode)

# Building
npm run build         # Build dự án (HTML, SCSS, JS, TS)

# Code Quality
npm run lint          # Chạy ESLint
npm run lint:css      # Chạy Stylelint cho SCSS/CSS
npm run check-all     # Chạy tất cả checks

## 🌐 Local Development Server

**Sử dụng Live Server Extension (Khuyên dùng):**

1. **Cài đặt Extension:** Live Server by Ritwick Dey trong VS Code
2. **Build dự án:** `npm run build`
3. **Start server:** Right-click vào `dist/index.html` → "Open with Live Server"
4. **Truy cập:** http://localhost:8080

**Workflow Development:**
```bash
# 1. Code changes trong src/
# 2. Rebuild project
npm run build
# 3. Live Server auto-reload trang web
````

File `.vscode/settings.json` đã config sẵn Live Server để:

- Serve từ folder `dist/`
- Port: 8080
- Auto-reload khi files thay đổi
  npm run lint:fix # ESLint với auto-fix
  npm run lint:css # Chạy Stylelint cho CSS/SCSS
  npm run lint:css:fix # Stylelint với auto-fix
  npm run format # Format với Prettier
  npm run format:check # Kiểm tra formatting

```

## 🎯 Learning Outcomes

Sau khi hoàn thành demo này, bạn sẽ hiểu:

1. **EditorConfig**: Cách đồng bộ editor settings across teams
2. **Prettier**: Automatic code formatting và consistent style
3. **ESLint**: Code linting, error detection, và best practices
4. **Stylelint**: CSS/SCSS linting, style conventions, và quality control
5. **Trailing Spaces**: Cleaning up unnecessary whitespace
6. **Vetur**: Vue.js development với advanced tooling

## 🔧 Customization

Mỗi extension có thể customize qua:

- **EditorConfig**: Chỉnh sửa `.editorconfig`
- **Prettier**: Chỉnh sửa `.prettierrc`
- **ESLint**: Chỉnh sửa `.eslintrc.json`
- **Stylelint**: Chỉnh sửa `.stylelintrc.json`
- **Trailing Spaces**: VS Code settings
- **Vetur**: VS Code settings cho Vue-specific options

## 🤝 Best Practices

1. **Setup workspace settings** cho team consistency
2. **Use format on save** để tự động format
3. **Configure pre-commit hooks** với husky + lint-staged
4. **Regular linting** trong CI/CD pipeline
5. **Team agreement** trên coding standards

## 📚 Tài liệu tham khảo

- [EditorConfig Documentation](https://editorconfig.org/)
- [Prettier Documentation](https://prettier.io/docs/)
- [ESLint Documentation](https://eslint.org/docs/)
- [Stylelint Documentation](https://stylelint.io/)
- [Trailing Spaces Extension](https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces)
- [Vetur Documentation](https://vuejs.github.io/vetur/)

---

**Happy Coding! 🚀**
```
