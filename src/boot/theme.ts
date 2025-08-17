import { defineBoot } from '#q-app/wrappers'
import { setCssVar } from 'quasar'

export type ThemeName =
  | 'grey'
  | 'purple'
  | 'blue'
  | 'red'
  | 'pink'
  | 'rose'
  | 'orange'
  | 'yellow'
  | 'green'

// 팔레트 정의
export const themes: Record<ThemeName, Record<string, string>> = {
  green: {
    primary: '#2e7d32', // 그린
    secondary: '#a5d6a7', // 라이트 그린
    accent: '#1b5e20', // 딥 그린
    dark: '#0f2a1b', // 다크 그린

    positive: '#66bb6a', // 연두/그린
    negative: '#e53935', // 빨강
    info: '#81d4fa', // 하늘
    warning: '#ffca28', // 앰버 노랑
  },
  yellow: {
    primary: '#fbc02d', // 머스타드 옐로우
    secondary: '#fff59d', // 라이트 옐로우
    accent: '#f57f17', // 브라운 톤 악센트
    dark: '#3e2723', // 다크 브라운

    positive: '#cddc39', // 라임옐로우 (연두 계열)
    negative: '#e53935', // 레드
    info: '#4fc3f7', // 하늘빛 블루
    warning: '#ffeb3b', // 선명한 옐로우
  },
  orange: {
    primary: '#fb8c00', // 오렌지
    secondary: '#ffcc80', // 라이트 오렌지
    accent: '#e65100', // 딥 오렌지
    dark: '#4e342e', // 브라운톤 다크

    positive: '#8bc34a', // 연두
    negative: '#e53935', // 빨강
    info: '#4fc3f7', // 하늘
    warning: '#ffb300', // 앰버 노랑
  },
  rose: {
    primary: '#b76e79', // 로즈골드
    secondary: '#d8a7b1', // 라이트 로즈
    accent: '#f4c2c2', // 베이비 핑크
    dark: '#3a2c2c', // 로즈 브라운

    positive: '#c5e1a5', // 연두빛이 감도는 파스텔 그린
    negative: '#e57373', // 부드러운 레드
    info: '#81d4fa', // 소프트 하늘색
    warning: '#fff176', // 파스텔 옐로우
  },

  pink: {
    primary: '#e91e63', // 강렬한 핑크
    secondary: '#f48fb1', // 라이트 핑크
    accent: '#ad1457', // 딥 핑크
    dark: '#4a1f2f', // 와인빛 다크

    positive: '#aed581', // 라이트 그린 (연두 계열)
    negative: '#ef5350', // 밝은 레드
    info: '#4fc3f7', // 하늘색
    warning: '#ffca28', // 골드 옐로우
  },

  red: {
    primary: '#d32f2f', // 메인 레드
    secondary: '#ef9a9a', // 라이트 레드
    accent: '#b71c1c', // 딥 레드
    dark: '#3e1f1f', // 와인 다크

    positive: '#9ccc65', // 연두빛 그린
    negative: '#d32f2f', // 강렬한 레드
    info: '#64b5f6', // 밝은 하늘색
    warning: '#ffeb3b', // 노랑
  },

  blue: {
    primary: '#1976d2', // 메인 블루
    secondary: '#90caf9', // 라이트 블루
    accent: '#0d47a1', // 딥 블루
    dark: '#102542', // 네이비 다크

    positive: '#8bc34a', // 라임 그린
    negative: '#f44336', // 레드
    info: '#29b6f6', // 시원한 하늘색
    warning: '#ffca28', // 머스타드 옐로우
  },
  purple: {
    primary: '#7e57c2', // 퍼플
    secondary: '#ce93d8', // 라이트 퍼플
    accent: '#5e35b1', // 딥 퍼플
    dark: '#2e2140', // 퍼플톤 다크

    positive: '#9ccc65', // 연두
    negative: '#e57373', // 소프트 레드
    info: '#64b5f6', // 하늘
    warning: '#ffd54f', // 라이트 앰버
  },
  grey: {
    primary: '#607d8b', // 블루그레이
    secondary: '#cfd8dc', // 라이트 그레이
    accent: '#455a64', // 딥 그레이
    dark: '#263238', // 네이비그레이

    positive: '#9ccc65', // 연두
    negative: '#ef5350', // 레드
    info: '#81d4fa', // 하늘
    warning: '#ffe082', // 라이트 노랑
  },
}

export function applyTheme(palette: Record<string, string>) {
  Object.entries(palette).forEach(([k, v]) => setCssVar(k, v))
}

export default defineBoot(() => {
  const saved = (localStorage.getItem('theme') as ThemeName) || 'blue'
  applyTheme(themes[saved])
})
