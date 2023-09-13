// Dependencies
import { CSSProperties } from 'vue';

// Inspired by https://github.com/JeremyMeissner/slidev-theme-apple-basic/blob/master/layoutHelper.ts

export function handleBackground(
  background?: string,
  dim = false
): CSSProperties {
  const isColor =
    background && background[0] === '#' && background.startsWith('rgb');

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

export function handleBackgroundImage(
  background?: string,
  dim?: number
): CSSProperties {
  const isColor =
    background && background[0] === '#' && background.startsWith('rgb');

  const graying = dim ? `rgba(0, 0, 0, ${dim / 100})` : undefined;

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

/*
function generateGrayGradient(dim) {
  // Ensure the dim value is within the valid range of 0 to 100
  dim = Math.max(0, Math.min(100, dim));

  // Calculate the color stop values based on the dim value
  const startColor = `rgba(0, 0, 0, ${dim / 100})`;
  const endColor = `rgba(0, 0, 0, ${1 - dim / 100})`;

  // Create the linear gradient CSS string
  const gradient = `linear-gradient(to bottom, ${startColor}, ${endColor})`;

  return gradient;
}

// Example usage
const dimValue = 50; // Change this to any value from 0 to 100
const gradientString = generateGrayGradient(dimValue);
console.log(gradientString);
*/
