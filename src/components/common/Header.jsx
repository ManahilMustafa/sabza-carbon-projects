"use client"

import { Leaf, Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  return (
    // Make it sticky and on top of other content
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="p-1  rounded-lg">
              <div >
  <img
    src="/logo.png" // 🖼 Replace this path with your logo path
    alt="Logo"
    className="h-16 w-19 object-contain"
  />
</div>
            </div>
           <div>
  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-600">
    Carbon Credits Marketplace
  </p>
</div>

          </div>
        </div>

   <div className="flex items-center space-x-2 sm:space-x-4">
  <Button
    variant="outline"
    size="icon"
    className="relative border-green-600 text-green-600 bg-white p-1 sm:p-2"
  >
    <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
    <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full" />
  </Button>

  <Avatar className="bg-green-600 text-white rounded-lg w-8 h-8 sm:w-10 sm:h-10">
    <AvatarImage src="/placeholder-user.jpg" alt="User avatar" />
    <AvatarFallback>
      <User className="h-4 w-4 sm:h-5 sm:w-5" />
    </AvatarFallback>
  </Avatar>
</div>

      </div>
    </header>
  )
}
