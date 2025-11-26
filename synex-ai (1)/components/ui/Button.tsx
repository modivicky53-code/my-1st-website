import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger' | 'liquid';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading,
  icon,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] relative overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/20 rounded-lg border border-white/10",
    secondary: "bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 rounded-lg",
    ghost: "bg-transparent text-slate-400 hover:text-white hover:bg-white/5 rounded-lg",
    outline: "bg-transparent border border-slate-600 text-slate-300 hover:border-indigo-400 hover:text-white rounded-lg hover:shadow-[0_0_15px_-5px_rgba(99,102,241,0.5)]",
    danger: "bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20 rounded-lg",
    liquid: "bg-transparent text-white border border-white/20 rounded-lg hover:border-transparent relative z-10"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {/* Liquid background effect for specific variants if needed, else simple highlight */}
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {isLoading ? (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : icon ? (
        <span className="mr-2 relative z-10">{icon}</span>
      ) : null}
      <span className="relative z-10">{children}</span>
    </button>
  );
};