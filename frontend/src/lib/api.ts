export const API_URL = 'http://localhost:3000';

export async function fetchAPI(endpoint: string, options: RequestInit = {}) {
	const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
	
	const headers: Record<string, string> = {
		...options.headers as Record<string, string>
	};
	
	// Only set Content-Type if it's not FormData (browser sets FormData content-type automatically)
	if (!(options.body instanceof FormData)) {
		headers['Content-Type'] = 'application/json';
	}
	
	if (token) {
		headers['Authorization'] = `Bearer ${token}`;
	}

	const res = await fetch(`${API_URL}${endpoint}`, {
		...options,
		headers
	});

	if (!res.ok) {
		const error = await res.json().catch(() => ({}));
		if (res.status === 401 && typeof window !== 'undefined') {
			localStorage.removeItem('token');
			window.location.href = '/login';
		}
		throw new Error(error.error || 'Terjadi kesalahan pada server');
	}

	return res.json();
}
