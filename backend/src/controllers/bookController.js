import Book from "../models/book.js";

// Ajouter un livre (admin uniquement)
export const createBook = async (req, res) => {
  try {
    const { title, author, description, coverImage } = req.body;

    const book = new Book({ title, author, description, coverImage });
    await book.save();

    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de l'ajout du livre" });
  }
};

// Mettre à jour un livre par ID
export const updateBook = async (req, res) => {
  try {
      const { title, author, description, coverImage } = req.body;

      const updatedBook = await Book.findByIdAndUpdate(
          req.params.id,
          { title, author, description, coverImage },
          { new: true, runValidators: true }
      );

      if (!updatedBook) {
          return res.status(404).json({ message: "Livre non trouvé" });
      }

      res.json(updatedBook);
  } catch (error) {
      console.error("Erreur lors de la mise à jour du livre", error);
      res.status(500).json({ message: "Erreur serveur" });
  }
};

// Récupérer tous les livres
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des livres" });
  }
};

// Récupérer un livre par ID
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Livre non trouvé" });

    res.json(book);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération du livre" });
  }
};

// Supprimer un livre (admin uniquement)
export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: "Livre non trouvé" });

    res.json({ message: "Livre supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la suppression du livre" });
  }
};
