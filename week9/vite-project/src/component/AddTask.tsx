import React from 'react'

export default function AddTask() {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    return (
        <div>
            <form>
                <div className='form-control'>
                    <label>Title</label>
                    <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='form-control'>
                    <label>Date</label>
                    <input type='text' value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
            </form>
            <div>AddTask</div>
        </div>
    )
}
