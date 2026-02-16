// Data for portfolio
import {
  AzureIcon,
  JavaScriptIcon,
  LangchainIcon,
  NextjsIcon,
  NodejsIcon,
  PythonIcon,
  ReactIcon,
  ScikitLearnIcon,
  TailwindCSS,
  TensorflowIcon,
  TypescriptIcon,
} from '../utils/icons'

// Project Data
export const projects = [
  {
    priority: 1,
    title: 'Sentiment Analysis Engine',
    shortDescription:
      'A deep learning-based sentiment analysis system using BERT and TensorFlow. Analyzes customer reviews and social media data to extract insights and classify sentiments with 95% accuracy.',
    cover:
      'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    livePreview: 'https://google.com',
    type: 'Deep Learning 🧠',
    siteAge: '3 months old',
  },
  {
    priority: 2,
    title: 'AI-Powered Chatbot',
    shortDescription:
      'A conversational AI chatbot built with LangChain and GPT-4. Features context-aware responses, multi-turn conversations, and integration with knowledge bases for enterprise customer support.',
    cover:
      'https://images.unsplash.com/photo-1684487747720-1ba29cda82f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    livePreview: 'https://google.com',
    githubLink: 'https://google.com',
    type: 'Generative AI 🤖',
  },
  {
    priority: 3,
    title: 'Image Classification System',
    shortDescription:
      'A computer vision project using CNNs and transfer learning with ResNet50. Classifies medical images for disease detection with real-time inference capabilities deployed on Azure.',
    cover:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    type: 'Machine Learning 📊',
    livePreview: 'https://google.com',
    githubLink: 'https://google.com',
  },
  {
    priority: 4,
    title: 'Predictive Analytics Dashboard',
    shortDescription:
      'An end-to-end ML pipeline using Scikit-learn for predictive analytics. Features data preprocessing, model training, and interactive visualizations for business intelligence and forecasting.',
    cover:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    type: 'Machine Learning 📈',
    livePreview: 'https://google.com',
    githubLink: 'https://google.com',
  },
]

// Service Data
export const serviceData = [
  {
    icon: JavaScriptIcon,
    title: 'JavaScript Development',
    shortDescription: 'Creating dynamic and interactive web applications using JavaScript.',
  },
  {
    icon: ReactIcon,
    title: 'React.js Development',
    shortDescription: 'Building modern and responsive user interfaces with React.js.',
  },
  {
    icon: NodejsIcon,
    title: 'Node.js Backend',
    shortDescription: 'Developing scalable server-side applications using Node.js.',
  },
  {
    icon: NextjsIcon,
    title: 'Next.js Development',
    shortDescription: 'Creating server-rendered React applications with Next.js.',
  },
  {
    icon: TypescriptIcon,
    title: 'TypeScript Development',
    shortDescription: 'Ensuring robust and maintainable code with TypeScript.',
  },
  {
    icon: TailwindCSS,
    title: 'Tailwind CSS Styling',
    shortDescription: 'Designing beautiful and responsive interfaces with Tailwind CSS.',
  },
]

// Skill List
export const skillList = [
  {
    name: 'Python',
    icon: PythonIcon,
  },
  {
    name: 'Scikit-learn',
    icon: ScikitLearnIcon,
  },
  {
    name: 'TensorFlow',
    icon: TensorflowIcon,
  },
  {
    name: 'LangChain',
    icon: LangchainIcon,
  },
  {
    name: 'Azure',
    icon: AzureIcon,
  },
]

export const footerLinks = [
  { title: 'About', href: '#' },
  { title: 'Projects', href: '#projects' },
  { title: 'Testimonials', href: '#testimonials' },
  {
    title: 'Blogs',
    href: '#blogs',
  },
  {
    title: 'Services',
    href: '#services',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
]

export const themes = [
  {
    name: 'Light',
    colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'],
  },
  {
    name: 'Dark',
    colors: ['#011627', '#607b96', '#0d1a3b', '#5565e8', '#18f2e5'],
  },
  {
    name: 'Aqua',
    colors: ['#b2e4e8', '#004a55', '#00c1d4', '#004a55', '#ff6f61'],
  },
  {
    name: 'Retro',
    colors: ['#fff3e0', '#6d4c41', '#ffcc80', '#5d4037', '#ffab40'],
  },
]

export const languages = ['En', 'Es', 'Fr', 'De', 'Ru']
