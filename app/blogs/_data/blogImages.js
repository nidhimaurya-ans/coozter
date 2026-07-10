export const blogImages = {
  "affiliate-branding-beyond-referrals":
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=84",
  "search-intent-before-content-calendar":
    "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=1600&q=84",
  "paid-campaigns-that-teach":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=84",
  "social-positioning-for-expert-led-brands":
    "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1600&q=84",
  "lead-generation-with-better-context":
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=84",
  "content-systems-that-support-sales":
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=84",
  "reporting-that-creates-decisions":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=84",
};

export function getBlogImage(postOrSlug) {
  if (typeof postOrSlug === "object" && postOrSlug?.imageUrl) {
    return postOrSlug.imageUrl;
  }

  const slug = typeof postOrSlug === "object" ? postOrSlug?.slug : postOrSlug;

  return blogImages[slug] || blogImages["affiliate-branding-beyond-referrals"];
}
