export const projects = [
  {
    slug: 'bedrock',
    name: 'Bedrock',
    summary: '64-bit ISA · LLVM toolchain · emulator',
    status: 'active',
    origin: 'from foliOS',
    href: 'https://bedrock-proj.github.io/',
    accent: 'var(--isa)',
  },
  {
    slug: 'folios',
    name: 'foliOS',
    summary: 'Ambikernel OS · ABI · toolchain',
    status: 'on hold',
    origin: 'from EMOS',
    href: 'https://folios-project.github.io/',
    accent: 'var(--os)',
  },
  {
    slug: 'ehbc',
    name: 'EHBC',
    summary: 'Homebrew computer · firmware',
    status: 'on hold',
    origin: null,
    href: 'https://github.com/ehbc-project',
    accent: 'var(--hw)',
  },
] as const;

export const work = [
  {
    name: 'ofsl2',
    href: 'https://github.com/kms1212/ofsl2',
    kind: 'Systems',
    text: 'C library for manipulating file-system structures on drives and disk images, with a C++ wrapper.',
  },
  {
    name: 'WxWave',
    href: 'https://github.com/kms1212/WxWave',
    kind: 'Systems',
    text: 'GTKWave alternative written in C++ and wxWidgets.',
  },
  {
    name: '2022-busanedu-ai-project',
    href: 'https://github.com/kms1212/2022-busanedu-ai-project',
    kind: 'Web',
    text: 'AI-based project, 1st place at the 2022 Busan AI project competition.',
  },
  {
    name: 'pyApplicationFramework',
    href: 'https://github.com/kms1212/pyApplicationFramework',
    kind: 'App',
    text: 'SwiftUI-style declarative GUI framework for Python.',
  },
];

export const stack = {
  'Systems & Hardware': {
    Languages: ['C', 'C++', 'Rust', 'Ada', 'Fortran', 'Python'],
    'Architecture / ISA': ['m68k', 'x86/IA32', 'x86/AMD64', 'AVR', 'ARM', 'MOS 6502'],
    HDL: ['SystemVerilog', 'Verilog', 'VHDL'],
    'Toolchains / EDA': ['LLVM', 'GCC', 'GNU Binutils', 'CMake', 'Meson', 'LibreLane', 'Verilator', 'Yosys', 'GNU Bison', 'GNU Flex'],
  },
  'Web & Application': {
    Languages: ['TypeScript', 'JavaScript', 'Python', 'C#', 'Java', 'Dart', 'Swift', 'PHP', 'Perl', 'C++'],
    'Frameworks / Platforms': ['Vue.js', 'Express', 'Django', 'Spring Boot', '.NET', 'Flutter', 'Expo', 'Electron'],
    'Databases / Tools': ['MySQL', 'Oracle SQL', 'Docker', 'Figma'],
  },
};

export const awards = [
  '2022 AI 기반 프로젝트 경진대회 1위 (부산광역시 교육감상)',
  '2020 대학부설 과학영재교육원 사사과정 연구성과 발표대회 한국과학기술원 총장상',
  '부산대학교 과학영재교육원 IT-수학융합 심화·사사과정 수료',
  '부산광역시교육청 미래교육원 정보영재과정 수료',
];
