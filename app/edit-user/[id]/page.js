'use client'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "@/store/reducers/userReducer";
import { useRouter } from "next/navigation";
const EditUser = ({ params }) => {
    const dispatch = useDispatch()
    const { id } = params
    const router = useRouter()
    const user = useSelector(state => state.user.user)
    const [state, setState] = useState({  // Initialisation de state avec la valeur recue
        prenom: '',
        nom: '',
        email: '',
        biographie: '',
        conditions: false,
    })

    function handleChange(event) {
        const { name, value, checked, type } = event.target
        setState(previsouState => ({ ...previsouState, [name]: type === 'checkbox' ? checked : value }))

    }

    useEffect(() => {
        if (user) setState(user)
    }, [user])

    function submit(event) {
        event.preventDefault()
        id && dispatch(updateUser(state, id))
        router.push('/user-list')

    }


    return (
        <div className='card mt-5'>
            <h2 className='card-title'>Modifier l'utilisateur</h2>
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
    )
}

export default EditUser;