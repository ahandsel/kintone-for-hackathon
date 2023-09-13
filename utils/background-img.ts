// Dependencies
import { CSSProperties } from 'vue';

// Inspired by https://github.com/JeremyMeissner/slidev-theme-apple-basic/blob/master/layoutHelper.ts

export function handleBackgroundImage(
  background?: string,
  dim?: number
): CSSProperties {
  const isColor =
    background && background[0] === '#' && background.startsWith('rgb');
  // dim's default value is 50
  const isDim = dim =>  
    typeof dim === 'number'  
    ? dim > 100 ? 100  
    : dim < 0 ? 0  
    : dim  
    : 50;

  overlay.style.opacity = opacityValue;

  const style = {
    background: isColor ? background : undefined,
    color: background && !isColor ? 'white' : undefined,
    backgroundImage: isColor
      ? undefined
      : background
      ? dim
        ? `linear-gradient(#0005, #0008), url(${background})`
        : `url("${background}")`
      : undefined,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  if (!style.background) delete style.background;

  return style;
}
