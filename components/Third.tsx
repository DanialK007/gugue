import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";

const booksList = [
  {
    title: "Verity",
    author: "Colleen Hoover",
    description:
      "A psychological thriller about a struggling writer and disturbing secrets.",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMzWwGpy2aOQC9SJuWnQDYmv14dQ1gU7_G2GBQTDgcaasM_ZIV8tqjyjO3qDE5ZmBI0smTjjdK2TIQyhfNZHzkuFA3aQtkG2LFKj06g_A&s=10",
  },
  {
    title: "The Things You Can See Only When You Slow Down",
    author: "Haemin Sunim",
    description:
      "Gentle reflections on mindfulness, peace, and slowing down in life.",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4jewKE0Ww2Vuxbf8-W8ZV3bWeZuNu7g0jk6IOZvV6KyEucEhsFuXOhsld8Wqdtb_zfXlT1z9a30hWdJg5lA7jiDfoeXeLJjl0O119Sw&s=10",
  },
  {
    title: "It Ends With Us",
    author: "Colleen Hoover",
    description:
      "A powerful story about love, resilience, and breaking cycles of abuse.",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaE7uUtExFyHN9R2lGjOc7T6l09TBkapEqwQ&s",
  },
  {
    title: "Harry Potter and the Cursed Child",
    author: "J.K. Rowling",
    description:
      "A stage-play sequel following Harry Potter’s life as an adult.",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6TqlVXkgu9FKWaRW_VglK6dN7CMccFL6bdg&s",
  },
  {
    title: "The Song of Achilles",
    author: "Madeline Miller",
    description:
      "A retelling of the Trojan War through the love of Achilles and Patroclus.",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQKODzFRO7sw4TQlQ98lYVshrKyF732ZjUuA&s",
  },
  {
    title: "After I Do",
    author: "Taylor Jenkins Reid",
    description: "A marriage takes a break to rediscover love and identity.",
    coverImage:
      "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781398516724/after-i-do-9781398516724_hr.jpg",
  },
  {
    title: "A Good Girl’s Guide to Murder",
    author: "Holly Jackson",
    description:
      "A teen investigates a closed murder case for a school project.",
    coverImage:
      "https://cdn11.bigcommerce.com/s-wd2hegc1u5/images/stencil/1280x1280/products/737897/684028/9780008687069__47847.1734363627.jpg?c=1",
  },
  {
    title: "Reminders of Him",
    author: "Colleen Hoover",
    description: "A mother seeks redemption and forgiveness after tragedy.",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp33Pq4MkAOEq5FW3wtUmvmTnAFvkkqpAHqA&s",
  },
  {
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    description:
      "A reclusive Hollywood icon reveals her glamorous and painful life.",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLIuEX5QEcNtw-w_SvCd_joFWogRm5gvWblQ&s",
  },
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    description: "A woman stops speaking after a violent crime — and why.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/The_Silent_Patient_early_2019_UK_edition.png/250px-The_Silent_Patient_early_2019_UK_edition.png",
  },
  {
    title: "Circe",
    author: "Madeline Miller",
    description: "The life of a powerful witch from Greek mythology.",
    coverImage:
      "https://www.hachettebookgroup.com/wp-content/uploads/2018/05/97803165563472.jpg?w=640",
  },
  {
    title: "The Maze Runner",
    author: "James Dashner",
    description: "Teens trapped in a deadly maze fight to survive.",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYy4hu2L6mSmodLiim-ms2lgybwwkBNUg0Sg&s",
  },
  {
    title: "Serpent & Dove",
    author: "Shelby Mahurin",
    description: "A witch and a witch hunter are forced into marriage.",
    coverImage:
      "https://www.harpercollins.com/cdn/shop/files/9780062878038_e5963b37-2ae4-41bf-8229-2d6c212abdb6_1200x1200.jpg?v=1767790598",
  },
  {
    title: "The Invisible Life of Addie LaRue",
    author: "V.E. Schwab",
    description: "A woman cursed to be forgotten by everyone she meets.",
    coverImage: "https://mpd-biblio-covers.imgix.net/9780765387561.jpg",
  },
  {
    title: "Wonder",
    author: "R.J. Palacio",
    description: "A boy with facial differences navigates school and kindness.",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4h6SXswVd2ixloJX2nxDw1WIK4jXbstDtA&s",
  },
  {
    title: "The Stranger",
    author: "Albert Camus",
    description: "A philosophical novel about absurdism and detachment.",
    coverImage:
      "https://www.sundialpress.co/wp-content/uploads/2024/02/Screenshot-2024-02-26-at-12.42.47.png",
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    description: "A man remains young while his portrait ages with his sins.",
    coverImage:
      "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781625587534/the-picture-of-dorian-gray-9781625587534_hr.jpg",
  },
  {
    title: "The Midnight Library",
    author: "Matt Haig",
    description: "Exploring alternate lives between life and death.",
    coverImage:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1602190253l/52578297.jpg",
  },
  {
    title: "They Both Die at the End",
    author: "Adam Silvera",
    description: "Two strangers spend their last day alive together.",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzSAWEDI3OTPB2Rkapfb3P7xmgKjldLPKvyg&s",
  },
  {
    title: "We Were Liars",
    author: "E. Lockhart",
    description: "A wealthy family hides dark secrets on a private island.",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz9zjnW_VZcyvbjmYRXCAmKd0tlGFGV-8JFA&s",
  },
  {
    title: "South of the Border, West of the Sun",
    author: "Haruki Murakami",
    description:
      "A quiet and emotional story about nostalgia, obsession, and the choices that shape adult life.",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiDsAL8IUBWOSaHTUCMhFT0dy4x1VwM54J1g&s",
  },
  {
    title: "Dance Dance Dance",
    author: "Haruki Murakami",
    description:
      "A surreal continuation of A Wild Sheep Chase, exploring loneliness, identity, and modern society.",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTveXCo8jI4cjM-c7_T52RSECHTqI2RoayzMw&s",
  },
  {
    title: "Wuthering Heights",
    author: "Emily Brontë",
    description:
      "A dark and passionate tale of love, revenge, and obsession on the Yorkshire moors.",
    coverImage: "https://images.penguinrandomhouse.com/cover/9780451531797",
  },
  {
    title: "Norwegian Wood",
    author: "Haruki Murakami",
    description:
      "A nostalgic story of love, loss, and memory set in 1960s Tokyo.",
    coverImage:
      "https://www.asiabooks.com/media/catalog/product/cache/a5ac216be58c0cbce1cb04612ece96dc/9/7/9780099448822c_5.jpg",
  },
  {
    title: "After Dark",
    author: "Haruki Murakami",
    description:
      "A single night in Tokyo reveals interconnected lives in a quiet, surreal atmosphere.",
    coverImage:
      "https://bizweb.dktcdn.net/100/326/228/products/after-dark-by-haruki-murakami-bookworm-hanoi-0031e826-bcf6-4d3d-a81c-c7fbe528a4f0.jpg?v=1590723834513",
  },
  {
    title: "Men Without Women",
    author: "Haruki Murakami",
    description:
      "A collection of short stories examining loneliness, love, and emotional isolation.",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRMjFkM5M26nfkCze9m1S-XRTohlZFWft78w&s",
  },
];

function Third() {
  return (
    <div className="bg-neutral-200 dark:bg-neutral-700 p-2">
      <div className="rounded-3xl border-2 border-black bg-[url('/shelf.png')] bg-repeat bg-contain grid pt-12 pb-20 md:py-26 gap-8 md:gap-16 overflow-x-hidden">
        <Caro books={booksList.slice(0, 9)} />
        <Caro books={booksList.slice(9, 18)} />
        <Caro books={booksList.slice(18, 26)} />
      </div>
    </div>
  );
}

function Caro({ books }: { books: typeof booksList }) {
  return (
    <Carousel>
      <CarouselContent className="px-5 md:px-12">
        {books.map((book, index) => (
          <CarouselItem
            key={index}
            className="flex justify-center items-center basis-1/3 sm:basis-1/5 xl:basis-1/7 hover:scale-110 duration-300"
          >
            <div className="size-fit relative">
              <img
                src={book.coverImage ?? "book.png"}
                alt={book.title}
                className="h-30 md:h-46"
              />
              <div className="absolute inset-0 -z-1 bg-black translate-x-2 translate-y-2"></div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Third;
