const ITEMS = [
  {
    href: 'https://nextjs.org/showcase',
    title: 'showcase',
    description: 'The web framework for when it matters',
  },
  {
    href: 'https://nextjs.org/docs',
    title: 'docs',
    description: 'What is Next.js?',
  },
  {
    href: 'https://nextjs.org/blog',
    title: 'blog',
    description: 'The latest Next.js news',
  },
  {
    href: 'https://nextjs.org/',
    title: 'home',
    description: 'The React Framework for the Web',
  },
];

export default function Links() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Links</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {ITEMS.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-gray-300 transition-shadow duration-200"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h2>
            <p className="text-gray-600">{item.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
