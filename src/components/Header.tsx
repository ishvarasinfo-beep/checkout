interface HeaderProps {
  onSignIn: () => void;
}

export default function Header({ onSignIn }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-serif text-gray-800">Secure Checkout</h1>
        <button
          onClick={onSignIn}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
        >
          Sign In
        </button>
      </div>
    </header>
  );
}
