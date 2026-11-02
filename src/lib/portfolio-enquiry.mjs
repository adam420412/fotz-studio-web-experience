import { instagramProjects } from '../data/instagram-projects.mjs';
import { enquiryHref } from './enquiry.mjs';
import { industryEnquiryHref } from './industry-enquiry.mjs';

// Only published portfolio IDs can become enquiry context, never arbitrary URL text.
export function readPortfolioReference(search = '') {
  const id = new URLSearchParams(search).get('realizacja');
  return instagramProjects.find(project => project.id === id) ?? null;
}

export function portfolioEnquiryHref(id, industry) {
  const project = instagramProjects.find(item => item.id === id);
  if (!project) return industryEnquiryHref(industry, enquiryHref('video'));
  const variant = id === 'dsk-jubileusz' ? 'film' : id === 'cupra-raval' ? 'spot' : 'reels';
  const params = new URLSearchParams({ usluga: 'video', wariant: variant, realizacja: project.id });
  return industryEnquiryHref(industry, `/kontakt?${params}#formularz`);
}

export function appendPortfolioReference(message, id) {
  const project = instagramProjects.find(item => item.id === id);
  return project ? `${message}\n\nInspiracja z portfolio FOTZ Studio: ${project.name}\n${project.url}` : message;
}
