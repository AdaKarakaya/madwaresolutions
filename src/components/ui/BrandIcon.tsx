import Image from 'next/image';

interface BrandIconProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  variant?: 'default' | 'muted' | 'accent';
}

const sizeClasses = {
  xs: 'w-4 h-4',
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-10 h-10',
  xl: 'w-12 h-12',
  '2xl': 'w-16 h-16',
};

const sizePixels = {
  xs: 16,
  sm: 24,
  md: 32,
  lg: 40,
  xl: 48,
  '2xl': 64,
};

export default function BrandIcon({ 
  size = 'md', 
  className = '',
  variant = 'default'
}: BrandIconProps) {
  const variantClasses = {
    default: '',
    muted: 'opacity-60',
    accent: 'drop-shadow-lg',
  };

  return (
    <Image
      src="/images/madware.png"
      alt="Madware"
      width={sizePixels[size]}
      height={sizePixels[size]}
      className={`${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    />
  );
}

// Brand logo with text
interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showIcon?: boolean;
}

const logoSizeClasses = {
  sm: { icon: 'w-8 h-8', text: 'text-lg' },
  md: { icon: 'w-12 h-12', text: 'text-xl' },
  lg: { icon: 'w-14 h-14', text: 'text-2xl' },
  xl: { icon: 'w-16 h-16', text: 'text-3xl' },
};

const logoIconPixels = {
  sm: 32,
  md: 48,
  lg: 56,
  xl: 64,
};

export function BrandLogo({ 
  size = 'md', 
  className = '',
  showIcon = true 
}: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {showIcon && (
        <Image
          src="/images/madware.png"
          alt="Madware Solutions"
          width={logoIconPixels[size]}
          height={logoIconPixels[size]}
          className={logoSizeClasses[size].icon}
          priority
        />
      )}
      <span className={`font-bold text-foreground ${logoSizeClasses[size].text}`}>
        Madware<span className="font-light">Solutions</span>
      </span>
    </div>
  );
}
