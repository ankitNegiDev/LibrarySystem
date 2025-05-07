import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';

function AddBook() {
    // a simple structure to add book.. (its a kind of form)
    const [form, setForm] = useState({
        title: '',
        author: '',
        category: '',
        description: '',
        rating: '',
    });
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // custom validator so that empty data is not sent means prevent empty obj to insert in list... we can add more validators but not required here ..
    function validate() {
        const newErrors = {};
        if (!form.title) newErrors.title = 'Title is required.';
        if (!form.author) newErrors.author = 'Author is required.';
        if (!form.category) newErrors.category = 'Category is required.';
        if (!form.description) newErrors.description = 'Description is required.';
        if (!form.rating) newErrors.rating = 'Rating is required.';
        else if (isNaN(form.rating) || form.rating < 0 || form.rating > 5)
            newErrors.rating = 'Rating must be a number between 0 and 5.';
        return newErrors;
    }

    function handleSubmit(event) {
        event.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            // dispatching the acvtion...
            dispatch(addBook({ ...form, rating: parseFloat(form.rating) }));
            navigate('/browse-books');
        } else {
            setErrors(validationErrors);
        }
    }

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    return (
        <div style={{ padding: '1rem' }}>
            <h1>Add a New Book</h1>
            <form onSubmit={handleSubmit} style={{ maxWidth: '500px' }}>
                <div style={{ marginBottom: '1rem' }}>
                    <label>Title:</label><br />
                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.5rem' }}
                    />
                    {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
                </div>

                <div style={{ marginBottom: '1rem' }}>
                    <label>Author:</label><br />
                    <input
                        type="text"
                        name="author"
                        value={form.author}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.5rem' }}
                    />
                    {errors.author && <p style={{ color: 'red' }}>{errors.author}</p>}
                </div>

                <div style={{ marginBottom: '1rem' }}>
                    <label>Category:</label><br />
                    <input
                        type="text"
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.5rem' }}
                    />
                    {errors.category && <p style={{ color: 'red' }}>{errors.category}</p>}
                </div>

                <div style={{ marginBottom: '1rem' }}>
                    <label>Description:</label><br />
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        rows="4"
                        style={{ width: '100%', padding: '0.5rem' }}
                    ></textarea>
                    {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}
                </div>

                <div style={{ marginBottom: '1rem' }}>
                    <label>Rating (0-5):</label><br />
                    <input
                        type="number"
                        name="rating"
                        value={form.rating}
                        onChange={handleChange}
                        min="0"
                        max="5"
                        step="0.1"
                        style={{ width: '100%', padding: '0.5rem' }}
                    />
                    {errors.rating && <p style={{ color: 'red' }}>{errors.rating}</p>}
                </div>

                <button type="submit" style={{ padding: '0.5rem 1rem' }}>
                    Add Book
                </button>
            </form>
        </div>
    );
}

export default AddBook;

// this compo will add a new book in the list...