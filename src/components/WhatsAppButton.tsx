const WhatsAppButton = () => {
    return (
      <a
        href="https://wa.me/573059152346?text=Hola%20Armando,%20vi%20tu%20portafolio%20y%20quiero%20contactarte"
        className="fixed top-[75%] right-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat en WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.37 0 0 5.373 0 12c0 2.117.555 4.152 1.6 5.938L0 24l6.215-1.587C8.094 23.443 10.017 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.767 0-3.487-.474-5-1.377l-.355-.207-3.689.943.984-3.6-.234-.371C2.655 16.055 2 14.055 2 12 2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm5.052-7.44c-.308-.154-1.823-.898-2.107-1-.284-.103-.492-.154-.701.154-.207.308-.801 1-.982 1.205-.18.206-.361.231-.668.077-.308-.154-1.298-.478-2.472-1.527-.914-.813-1.531-1.813-1.713-2.121-.18-.308-.02-.474.135-.627.139-.138.308-.36.463-.539.154-.18.206-.308.308-.514.103-.206.051-.385-.025-.539-.077-.154-.701-1.678-.962-2.295-.252-.605-.509-.524-.701-.534l-.598-.01c-.206 0-.539.077-.822.385-.283.308-1.08 1.056-1.08 2.577s1.106 2.984 1.26 3.192c.154.206 2.19 3.342 5.308 4.685.742.32 1.32.51 1.771.654.744.236 1.42.203 1.954.123.596-.089 1.823-.746 2.083-1.466.26-.719.26-1.335.181-1.466-.077-.123-.283-.2-.59-.354z"/>
        </svg>
      </a>
    );
  };
  
  export default WhatsAppButton;
  