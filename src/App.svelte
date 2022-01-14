<script>
	import FeedbackList from './components/FeedbackList.svelte'
	let feedback = [
		{
			id: 1,
			rating: 10,
			text: 'Sometimes it takes a while'
		},
		{
			id: 2,
			rating: 9,
			text: 'But you got this!'
		},
		{
			id: 3,
			rating: 5,
			text: 'Don\'t Give up!'
		},
	]

	const deleteFeedback = (e) => {
		const itemId = e.detail
		feedback = feedback.filter((item)=> item.id != itemId)
	}

</script>

<main class="container">
	<FeedbackList {feedback} on:delete-feedback={deleteFeedback}/>
</main>

