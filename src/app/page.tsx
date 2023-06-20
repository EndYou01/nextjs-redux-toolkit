"use client"

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { increment, decrement } from "../../redux/features/counterSlice";
import { useGetUserByIdQuery, useGetUsersQuery } from '../../redux/services/userApi'

export default function HomePage() {

	const count = useAppSelector(state => state.counterReducer.counter)
	const { data, error, isLoading, isFetching } = useGetUsersQuery(null)
	const dispatch = useAppDispatch()

	if (isLoading || isFetching) return <p>Loading...</p>
	if (error) return <p>Some Error...</p>

	return (
		<>
			<h1 className="text-center text-2xl">
				total: {count}
			</h1>

			<div className="flex justify-center gap-x-2"> 
				<button
					className="bg-green-500 px-3 py-2 rounded-md m-10"
					onClick={() => {
						dispatch(increment())
					}}>
					Increment
				</button>

				<br />

				<button
					className="bg-blue-500 px-3 py-2 rounded-md m-10"
					onClick={() => {
						dispatch(decrement())
					}}>
					Decrement
				</button>
			</div>

			<div className="grid grid-cols-3 mx-auto gap-3">
				{
					data?.map(user => (
						<div key={user.id} className="bg-zinc-800 p-4">
							<p>{user.name}</p>
							<p>{user.username}</p>
							<p>{user.email}</p>
						</div>
					))
				}
			</div>
		</>
	)
}
