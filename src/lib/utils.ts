import { twMerge } from 'tailwind-merge'
import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getLinkedinUrl() {
  return 'https://www.linkedin.com/in/marwan-tarik/'
}

export function getGithubUrl() {
  return 'https://github.com/MarwanTarik'
}

export function getSummary() {
  return `
    A Software Engineer experienced in Web Development and Cloud Computing: 2x AWS Certified
  `;
}