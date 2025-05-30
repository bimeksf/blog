'use client';

import ImagePicker from "@/components/image-picker"
import { useFormState } from "react-dom"
import { sharePost } from "@/lib/action";


type FormStateType = {
  message: string;
};
const initialState: FormStateType = {
message: '',
};
export default function PostShare(){
const [state, formAction] =useFormState(sharePost, initialState  )

    return (

            <>
            <h1>Share page</h1>
            
          <main className="">
        <form className="" action={formAction}>
          <div className="">
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
        
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Tags</label>
            <input type="text" id="tags" name="tags" required />
          </p>
          <p>
            <label htmlFor="description">description</label>
            <textarea
              id="description"
              name="description"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your image"  />
          {state.message && <p>{state.message}</p>}
          <p className="">
            <button>Submit</button>
          </p>
        </form>
      </main>

            </>

    )
}