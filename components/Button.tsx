import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "py-4 px-8 text-sm uppercase tracking-widest transition-all duration-300 font-sans font-semibold disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-luxury-black text-white hover:bg-neutral-800",
    secondary: "bg-white text-luxury-black border border-gray-200 hover:border-luxury-black",
    outline: "bg-transparent border border-white text-white hover:bg-white hover:text-luxury-black",
    ghost: "bg-transparent text-luxury-black hover:text-gray-600 px-0 py-2",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};