// components/ButtonLink.jsx
import Link from "next/link";

export function Button({
    href,
    children,
    variant = "primary",
    size = "md",
    className = "",
    icon,
    iconPosition = "right",
}) {
    const baseClasses = "inline-flex items-center justify-center sm:rounded-2xl rounded-xl font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

    const variantClasses = {
        primary: "bg-primary text-black hover:bg-primary/90 font-semibold",
        black: "bg-black text-white hover:bg-black/80 hover:!text-white",
    };

    const sizeClasses = {
        sm: "h-[52px] px-9 text-sm",
        md: "sm:h-14 h-[44px] sm:px-8 px-5 py-2 text-sm sm:text-base",
        lg: "h-11 px-8 text-lg",
    };

    const iconSizeClasses = {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
    };

    return (
        <Link
            href={href}
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} flex flex-row items-center`}
        >
            {icon && iconPosition === "left" && (
                <span className={`mr-2 ${iconSizeClasses[size]}`}>{icon}</span>
            )}
            {children}
            {icon && iconPosition === "right" && (
                <span className={`ml-2 ${iconSizeClasses[size]}`}>{icon}</span>
            )}
        </Link>
    );
}