export const getModerationString = (moderation: number): string => {
   if (moderation === 1) {
      return 'Good';
   } else if (moderation <= 0.5) {
      return 'かなり多い';
   } else if (moderation <= 0.8) {
      return '多い';
   } else if (moderation < 1) {
      return '少し多い';
   } else if (moderation < 1.2) {
      return '少し少ない';
   } else if (moderation < 1.5) {
      return '少ない';
   } else {
      return 'かなり少ない';
   }
};
