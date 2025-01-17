export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')     
    .replace(/[^\w\-]+/g, '') 
    .replace(/\-\-+/g, '-')  
    .replace(/^-+/, '')     
    .replace(/-+$/, '');      
};
