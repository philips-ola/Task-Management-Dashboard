import {useState} from 'react';
import Dashboard from './Dashboard'

const Form = ({setTasks}) => {

const [formData, setFormData] = useState({
  title:'',
  description:'',
  priority:'Low',
  date: '',
  status:'Todo'
})

const handleChange = (e) => {
  setFormData({
      ...formData,
  [e.target.name]: e.target.value
  })
};

const resetFormData = () => {
  setFormData({
          title:'',
  description:'',
  priority:'Low',
  date:'',
  status:'Todo'
  })
}
;


const handleSubmit = (e) => {
  e.preventDefault();

  //Create new task object
  const newTask = {id: Date.now(), ...formData};

  //Set task List
 // setTasks([newTask, ...tasks]);
  setTasks((prevTasks) => [newTask, ...prevTasks]);



  //Resest form data
  setFormData({
      title:'',
  description:'',
  priority:'Low',
  date:'',
  status:'Todo'
  })

  window.alert('Task added successfully')
}

  return (
    <>
        <div className="bg-white rounded-2xl shadow-lg p-5 h-fit">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Add New Task
            </h2>

            <button onClick={resetFormData} className="text-sm text-blue-600 hover:text-blue-800 font-medium transition cursor-pointer">
              Clear Form
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Task Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Task Title
              </label>

              <input
                type="text"
                name='title'
                required
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter task title"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>

              <textarea
                name='description'
                value={formData.description}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Enter task description"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>
            </div>

            {/* Priority */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Priority
              </label>

              <select 
              name='priority'
              onChange={handleChange}
              value={formData.priority}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500">
                <option value='Low'>Low</option>
                <option value='Medium'>Medium</option>
                <option value='High'>High</option>
              </select>
            </div>

            {/* Due Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Due Date
              </label>

              <input
                type="date"
                name='date'
                value={formData.date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
             
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Task Status
              </label>

              <select 
              name='status'
              onChange={handleChange}
              value={formData.status}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500">
                <option value='Todo'>Todo</option>
                <option value='In Progress'>In Progress</option>
                <option value='Completed'>Completed</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition cursor-pointer"
            >
              Add Task
            </button>
          </form>
        </div>



    </>
  )
}

export default Form;