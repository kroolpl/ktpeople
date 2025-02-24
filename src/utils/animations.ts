import { animate, stagger, type AnimationOptions } from "@motionone/dom";

export const fadeInUp = (elements: Element[], options?: Partial<AnimationOptions>) => {
  return animate(
    elements,
    { opacity: [0, 1], y: [20, 0] },
    { duration: 0.6, delay: stagger(0.1), ...options }
  );
};

export const slideIn = (elements: Element[], direction: 'left' | 'right', options?: Partial<AnimationOptions>) => {
  return animate(
    elements,
    { 
      opacity: [0, 1], 
      x: direction === 'left' ? [-20, 0] : [20, 0] 
    },
    { duration: 0.6, delay: stagger(0.1), ...options }
  );
}; 