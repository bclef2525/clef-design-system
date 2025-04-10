# �� Clef Design System | 클레프 디자인 시스템

A modern, accessible, and customizable design system built with React and TypeScript.
React와 TypeScript로 구축된 현대적이고 접근성이 뛰어난 커스터마이즈 가능한 디자인 시스템입니다.

[![npm version](https://badge.fury.io/js/@clef-design-system/core.svg)](https://badge.fury.io/js/@clef-design-system/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features | 주요 기능

- 🎯 Built with React and TypeScript | React와 TypeScript로 구축
- 🎨 Customizable theming | 커스터마이즈 가능한 테마
- ♿ Accessible components | 접근성이 뛰어난 컴포넌트
- 📱 Responsive design | 반응형 디자인
- 🚀 Modern and performant | 현대적이고 성능이 뛰어난
- 📦 Tree-shakeable exports | Tree-shaking 지원

## 📦 Installation | 설치 방법

```bash
# Using npm
npm install @clef-design-system/core

# Using yarn
yarn add @clef-design-system/core

# Using pnpm
pnpm add @clef-design-system/core
```

## 🚀 Quick Start | 빠른 시작

```tsx
import { Button } from "@clef-design-system/core";

function App() {
  return (
    <Button variant="primary" size="medium">
      Click me | 클릭하세요
    </Button>
  );
}
```

## 🎨 Usage Examples | 사용 예시

### Button Component | 버튼 컴포넌트

```tsx
import { Button } from '@clef-design-system/core';

// Primary Button | 기본 버튼
<Button variant="primary">Primary Button</Button>

// Secondary Button | 보조 버튼
<Button variant="secondary">Secondary Button</Button>

// Outline Button | 외곽선 버튼
<Button variant="outline">Outline Button</Button>

// Ghost Button | 고스트 버튼
<Button variant="ghost">Ghost Button</Button>

// With Icons | 아이콘 포함
<Button
  leftIcon={<IconComponent />}
  rightIcon={<IconComponent />}
>
  Button with Icons | 아이콘이 있는 버튼
</Button>

// Loading State | 로딩 상태
<Button isLoading>Loading Button</Button>
```

## 🛠️ Development | 개발 환경 설정

```bash
# Clone the repository | 저장소 클론
git clone https://github.com/your-username/clef-design-system.git

# Install dependencies | 의존성 설치
pnpm install

# Start development server | 개발 서버 시작
pnpm dev

# Build the package | 패키지 빌드
pnpm build
```

## 📚 Documentation | 문서

For detailed documentation, visit our [documentation site](https://your-docs-site.com).
자세한 문서는 [문서 사이트](https://your-docs-site.com)를 방문하세요.

## 🤝 Contributing | 기여하기

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.
기여를 환영합니다! 자세한 내용은 [기여 가이드](CONTRIBUTING.md)를 참고하세요.

## 📝 License | 라이선스

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
이 프로젝트는 MIT 라이선스 하에 있습니다 - 자세한 내용은 [LICENSE](LICENSE) 파일을 참고하세요.

## 🙏 Acknowledgments | 감사의 글

- Thanks to all our contributors | 모든 기여자분들께 감사드립니다
- Inspired by modern design systems | 현대적인 디자인 시스템에서 영감을 받았습니다
- Built with ❤️ by the Clef team | Clef 팀이 ❤️을 담아 만들었습니다
