import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

// 📚 Récupérer tous les livres
export const getLivres = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/books`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des livres", error);
    return [];
  }
};

// 📚 Récupérer un livre par ID
export const getLivreById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/books/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération du livre", error);
    return null;
  }
};

// 📚 Ajouter un livre
export const ajouterLivre = async (livre) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/books`, livre);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'ajout du livre", error);
    return null;
  }
};

// 📚 Supprimer un livre (admin uniquement)
export const supprimerLivre = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/books/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la suppression du livre", error);
    return null;
  }
};

// 👤 Inscription utilisateur
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'inscription", error);
    return null;
  }
};

// 👤 Connexion utilisateur
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/login`, userData);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la connexion", error);
    return null;
  }
};

// 👤 Récupérer tous les utilisateurs (admin uniquement)
export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs", error);
    return [];
  }
};
