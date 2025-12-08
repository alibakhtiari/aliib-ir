interface ServiceFeature {
  title: string;
  description: string;
  features: string[];
}

interface ServicesProps {
  dict: {
    title: string;
    subtitle: string;
    webDev: ServiceFeature;
    seo: ServiceFeature;
    content: ServiceFeature;
  }
}

const Services = ({ dict }: ServicesProps) => {
  const servicesList = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      title: dict.webDev.title,
      description: dict.webDev.description,
      features: Object.values(dict.webDev.features), // Assuming array or object, but TS says features is array in json? json is usually object with numeric keys if array? next-intl array access is tricky?
      // Wait, dict.webDev.features is likely an object in JSON: "features": ["a", "b"] -> array.
      // So dict.webDev.features is string[].
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
      title: dict.seo.title,
      description: dict.seo.description,
      features: Object.values(dict.seo.features),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
      title: dict.content.title,
      description: dict.content.description,
      features: Object.values(dict.content.features),
    },
  ]

  return (
    <section
      id="services"
      className="section bg-gray-50 dark:bg-gray-800 text-start"
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-2 text-lg font-medium text-blue-600 dark:text-blue-400">{dict.title}</h2>
          <h3 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">{dict.subtitle}</h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="p-8 transition-transform duration-300 bg-white shadow-lg dark:bg-gray-900 rounded-xl hover:-translate-y-2"
            >
              <div className="mb-6 text-blue-600 dark:text-blue-400">{service.icon}</div>
              <h4 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">{service.title}</h4>
              <p className="mb-6 text-gray-600 dark:text-gray-400">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 me-2 text-blue-600 dark:text-blue-400" // me-2 -> me-2
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
