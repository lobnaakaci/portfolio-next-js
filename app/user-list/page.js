'use client'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { addUser, getUser, deleteUser } from "@/store/reducers/userReducer";
const UserList = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const users = useSelector(state => state.user.users)
    const [state, setState] = useState({    // Valeurs de chaque champ de la forme
        prenom: '',
        nom: '',
        email: '',
        biographie: '',
        conditions: false,
    })

    function handleChange(event) {  // Mettre a jour le champ modifie 
        const { name, value, checked, type } = event.target
        setState(previsouState => ({ ...previsouState, [name]: type === 'checkbox' ? checked : value })) // Cas particulier du checkbox

    }
    function goToEdit(id) {   // Rediriger vers la page edit-user avec la valeur de l'element clique
        dispatch(getUser(id))
        router.push(`/edit-user/${id}`)
    }

    function supprimer(id) {  // Supprimer l'element clique
        dispatch(deleteUser(id))
    }

    function submit(event) {
        event.preventDefault() // Eviter le rafraichissement de la page ( eviter la soumission)
        dispatch(addUser({ ...state, id: users.length + 1 }))
        setState(prev => ({
            ...prev,
            prenom: '',
            nom: '',
            email: '',
            biographie: '',
            conditions: false,
        }))  // Reinitialiser la forme apres la soumission
    }

    return (
        <>
            {users.length ? (
                <>
                    <h1>Liste des utilisateurs ajoutes</h1>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Prenom</td>
                                <td>Nom</td>
                                <td>Email</td>
                                <td>Biographie</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.prenom}</td>
                                <td>{user.nom}</td>
                                <td>{user.email}</td>
                                <td>{user.biographie}</td>
                                <td><button className='btn btn-primary' onClick={() => goToEdit(user.id)}>Editer</button> <button className='btn btn-danger' onClick={() => supprimer(user.id)}>Supprimer</button></td>
                            </tr>)}
                        </tbody>
                    </table>
                </>

            ) : ''}
            <div className='card mt-5'>
                <h2 className='card-title'>Ajouter un utilisateur</h2>
                <div className='card-body'>
                    <form onSubmit={submit}>
                        <div className="mb-3">
                            <label className="form-label" htmlFor='prenom'>Prenom</label>
                            <input className="form-control" value={state.prenom} onChange={handleChange} type='text' name='prenom' id='prenom' placeholder='Entrer le prenom' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor='nom'>Nom</label>
                            <input className="form-control" value={state.nom} onChange={handleChange} type='text' name='nom' id='nom' placeholder='Entrer le nom' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor='email'>Email</label>
                            <input className="form-control" value={state.email} onChange={handleChange} type='email' name='email' id='email' placeholder="Entrer l'email" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor='biographie'>Biographie</label>
                            <textarea className="form-control" value={state.biographie} onChange={handleChange} name='biographie' id='biographie' placeholder='Entrer la biographie'></textarea>
                        </div>

                        <div className="mb-3">
                            <label className="form-label" htmlFor='conditions'>Conditions</label>
                            <input className="form-check" checked={state.conditions} onChange={handleChange} type='checkbox' name='conditions' id='conditions' />
                        </div>
                        <button className='btn btn-success'>Soumettre</button>
                    </form>
                </div>

            </div>
        </>

    )
}

export default UserList;