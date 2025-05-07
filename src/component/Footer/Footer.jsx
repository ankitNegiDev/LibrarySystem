function Footer() {
    return (
        <footer className="bg-gradient-to-br from-blue-400 via-violet-300 to-indigo-400 text-gray-800 py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm text-gray-600">© 2025 Online Library System. All rights reserved.</p>
                <div className="mt-2">
                    <a href="/privacy-policy" className="text-gray-500 hover:underline mx-2">Privacy Policy</a>
                    <a href="/terms" className="text-gray-600 hover:underline mx-2">Terms & Conditions</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
