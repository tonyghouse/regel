
import { Button } from "@/components/ui/button"

export default function CheatSheetPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6 py-8">
      <div className="bg-white rounded-lg shadow-md dark:bg-gray-950 overflow-hidden">
        <div className="p-6">
          <div className="text-2xl font-bold mb-2">/^[a-zA-Z0-9]+$/</div>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Matches strings that contain only alphanumeric characters.
          </p>
          <Button size="sm" className="w-full">
            Test
          </Button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md dark:bg-gray-950 overflow-hidden">
        <div className="p-6">
          <div className="text-2xl font-bold mb-2">
            /\d{3}-\d{3}-\d{4}/
          </div>
          <p className="text-gray-500 dark:text-gray-400 mb-4">Matches US phone numbers in the format xxx-xxx-xxxx.</p>
          <Button size="sm" className="w-full">
            Test
          </Button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md dark:bg-gray-950 overflow-hidden">
        <div className="p-6">
          <div className="text-2xl font-bold mb-2">/\b\w+\b/g</div>
          <p className="text-gray-500 dark:text-gray-400 mb-4">Matches all words in a string, with word boundaries.</p>
          <Button size="sm" className="w-full">
            Test
          </Button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md dark:bg-gray-950 overflow-hidden">
        <div className="p-6">
          <div className="text-2xl font-bold mb-2">/\b\w+@\w+\.\w+\b/</div>
          <p className="text-gray-500 dark:text-gray-400 mb-4">Matches valid email addresses.</p>
          <Button size="sm" className="w-full">
            Test
          </Button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md dark:bg-gray-950 overflow-hidden">
        <div className="p-6">
          <div className="text-2xl font-bold mb-2">/^https?:\/\/\S+$/</div>
          <p className="text-gray-500 dark:text-gray-400 mb-4">Matches valid HTTP or HTTPS URLs.</p>
          <Button size="sm" className="w-full">
            Test
          </Button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md dark:bg-gray-950 overflow-hidden">
        <div className="p-6">
          <div className="text-2xl font-bold mb-2">/^[0-9]+$/</div>
          <p className="text-gray-500 dark:text-gray-400 mb-4">Matches strings that contain only digits.</p>
          <Button size="sm" className="w-full">
            Test
          </Button>
        </div>
      </div>
    </div>
  )
}
