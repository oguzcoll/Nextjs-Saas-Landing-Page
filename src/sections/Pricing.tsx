import CheckIcon from '@/assets/check.svg';
import { twMerge } from 'tailwind-merge';
const pricingTiers = [
  {
    title: 'Free',
    monthlyPrice: 0,
    buttonText: 'Get started for free',
    popular: false,
    inverse: false,
    features: [
      'Up to 5 project members',
      'Unlimited tasks and projects',
      '2GB storage',
      'Integrations',
      'Basic support',
    ],
  },
  {
    title: 'Pro',
    monthlyPrice: 9,
    buttonText: 'Sign up now',
    popular: true,
    inverse: true,
    features: [
      'Up to 50 project members',
      'Unlimited tasks and projects',
      '50GB storage',
      'Integrations',
      'Priority support',
      'Advanced support',
      'Export support',
    ],
  },
  {
    title: 'Business',
    monthlyPrice: 19,
    buttonText: 'Sign up now',
    popular: false,
    inverse: false,
    features: [
      'Up to 5 project members',
      'Unlimited tasks and projects',
      '200GB storage',
      'Integrations',
      'Dedicated account manager',
      'Custom fields',
      'Advanced analytics',
      'Export capabilities',
      'API access',
      'Advanced security features',
    ],
  },
];

export const Pricing = () => {
  return (
    <section className='py-24'>
      <div className='container'>
        <div className='section-heading'>
          <h2 className='section-title'>Pricing</h2>
          <p className='section-description'>
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
          <div className='flex flex-col  items-center gap-6 mt-10 lg:flex-row  lg:items-end lg:justify-center'>
            {pricingTiers.map(
              ({
                title,
                monthlyPrice,
                buttonText,
                popular,
                inverse,
                features,
              }) => (
                <div
                  key={title}
                  className={twMerge(
                    'flex flex-col gap-4 border border-[#F1F1F1] bg-white rounded-3xl p-10 my-4 shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full',
                    inverse && 'border-black bg-black text-white'
                  )}
                >
                  <div className='flex  justify-between'>
                    <h3
                      className={twMerge(
                        'tex-lg font-bold text-black/50',
                        inverse && 'text-white/60'
                      )}
                    >
                      {title}
                    </h3>
                    {popular && (
                      <div className='inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20'>
                        <span className='bg-gradient-to-r from-[#DD7DDF] via-[#E1CD86] via-[#BBCB92] via-[#71C2EF] to-[#3BFFFF] bg-clip-text text-transparent font-medium'>
                          Popular
                        </span>
                      </div>
                    )}
                  </div>
                  <div className='flex items-baseline gap-1 mt-[30px]'>
                    <span className='text-4xl font-bold tracking-tighter leading-none'>
                      ${monthlyPrice}
                    </span>
                    <span
                      className={twMerge(
                        'tracking-tighter font-bold text-black/50',
                        inverse && 'text-white/60'
                      )}
                    >
                      /month
                    </span>
                  </div>
                  <button
                    className={twMerge(
                      'btn btn-primary w-full mt-[30px]',
                      inverse && 'bg-white text-black'
                    )}
                  >
                    {buttonText}
                  </button>
                  <ul className='flex flex-col gap-5 mt-8'>
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className='text-sm flex items-center gap-4'
                      >
                        {' '}
                        <span>
                          <CheckIcon className='w-5 h-5' />
                        </span>{' '}
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
