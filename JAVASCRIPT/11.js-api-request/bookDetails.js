import { BASE_URL } from "./constant.js"
const url = new URLSearchParams(window.location.search)
const id = url.get("id")

async function getBookById() {
    try {
        const resp = await fetch(`${BASE_URL}books/${id}`)
        const data = await resp.json()
        // console.log(data);
        renderUI(data)

    } catch (error) {
        console.log(error);
    }
}

getBookById()

function renderUI(book) {
    const bookDetalWrapper = document.getElementById("bookDetail")
    bookDetalWrapper.innerHTML = `
    <div class="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-200/70">
        <div class="relative overflow-hidden rounded-xl bg-gray-100">
          <img
            src="${book.coverImageURL}"
            alt="Book cover of The Pragmatic Programmer"
            class="w-full h-auto object-cover"
          />
        </div>

        <div class="mt-4 flex flex-wrap items-center gap-2">
          <span class="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            In stock: ${book.stock}
          </span>
          <span class="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
            Language: English
          </span>
          <span class="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
            Genre ID: 1
          </span>
          <span class="inline-flex items-center rounded-full border border-fuchsia-200 bg-fuchsia-50 px-3 py-1 text-xs font-semibold text-fuchsia-700">
            Sold: 150
          </span>
        </div>
      </div>

      <div class="space-y-6">
        <header class="space-y-3">
          <h1 class="text-3xl/tight font-bold tracking-tight">${book.title}</h1>
          <p class="text-gray-600">by <span class="font-medium text-gray-800">Andrew Hunt</span>, <span class="font-medium text-gray-800">David Thomas</span></p>

          <div class="flex items-center gap-3">
            <div class="flex items-center">
              <!-- 4 full stars + 1 half -->
              <svg class="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path class="text-amber-400" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.967 0 1.371 1.24.588 1.81l-2.803 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.803-2.036a1 1 0 00-1.176 0l-2.803 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.379-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              <svg class="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path class="text-amber-400" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.967 0 1.371 1.24.588 1.81l-2.803 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.803-2.036a1 1 0 00-1.176 0l-2.803 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.379-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              <svg class="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path class="text-amber-400" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.967 0 1.371 1.24.588 1.81l-2.803 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.803-2.036a1 1 0 00-1.176 0l-2.803 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.379-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              <svg class="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path class="text-amber-400" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.967 0 1.371 1.24.588 1.81l-2.803 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.803-2.036a1 1 0 00-1.176 0l-2.803 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.379-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              <!-- half star -->
              <svg class="size-5" viewBox="0 0 20 20" aria-hidden="true">
                <defs>
                  <linearGradient id="half">
                    <stop offset="50%" stop-color="rgb(251 191 36)" />
                    <stop offset="50%" stop-color="rgb(229 231 235)" />
                  </linearGradient>
                </defs>
                <path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.967 0 1.371 1.24.588 1.81l-2.803 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.803-2.036a1 1 0 00-1.176 0l-2.803 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.379-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <span class="text-sm text-gray-600">4.8/5</span>
          </div>
        </header>

        <div class="flex items-end justify-between">
          <div>
            <div class="text-sm text-gray-500">Price</div>
            <div class="mt-1 inline-flex items-baseline gap-1 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-3 py-2 text-white shadow-sm">
              <span class="text-xl font-semibold">$ ${book.price}</span>
              <span class="text-xs opacity-90">USD</span>
            </div>
          </div>

          <div class="hidden sm:flex items-center gap-2 text-sm">
            <span class="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 font-medium text-emerald-700 ring-1 ring-emerald-200/70">
              ✓ In Stock
            </span>
          </div>
        </div>

        <!-- Description -->
        <div class="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200/70">
          <h2 class="mb-2 text-lg font-semibold">Description</h2>
          <p class="leading-7 text-gray-700">
            A comprehensive guide to becoming a pragmatic and effective programmer.
          </p>
        </div>

        <!-- Actions -->
        <div class="flex flex-col gap-3 sm:flex-row">
          <button
            class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3 3h2l.4 2M7 13h10l3-8H6.4M7 13l-1.293 1.293A1 1 0 006 15h12m-9 4a1 1 0 11-2 0 1 1 0 012 0zm10 0a1 1 0 11-2 0 1 1 0 012 0z"/>
            </svg>
            Add to Cart
          </button>
          <button
            class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-gray-800 ring-1 ring-gray-300 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 21s-6.716-4.411-9.193-8.36C.88 9.8 2.27 6.5 5.5 6.5c2.02 0 3.155 1.2 3.943 2.29C10.345 7.7 11.48 6.5 13.5 6.5c3.23 0 4.62 3.3 2.693 6.14C18.716 16.59 12 21 12 21z"/>
            </svg>
            Add to Wishlist
          </button>
        </div>

        <!-- Meta -->
        <dl class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div class="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200/70">
            <dt class="text-xs uppercase tracking-wide text-gray-500">Author(s)</dt>
            <dd class="mt-1 font-medium">${book.author}</dd>
          </div>
          <div class="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200/70">
            <dt class="text-xs uppercase tracking-wide text-gray-500">Cover URL</dt>
            <dd class="mt-1 truncate text-indigo-700 underline decoration-indigo-300 underline-offset-2">
              <a href="https://m.media-amazon.com/images/I/61ztlXgCmpL._AC_UF1000,1000_QL80_.jpg" target="_blank" rel="noreferrer">Open image</a>
            </dd>
          </div>
        </dl>

        <button 
            id='goBackBtn'
           class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-gray-800 ring-1 ring-gray-300 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto cursor-pointer">
            go back
        </button>
      </div>
    `


    
    const goBackBtn = document.querySelector("#goBackBtn")

    goBackBtn.addEventListener("click", ()=>{
        window.history.back()
    })

}

