"use client"

import { Leaf, Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-3 md:py-4">
      <div className="max-w-full mx-auto flex items-center justify-between">
        {/* Logo / Title */}
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-green-100 rounded-lg flex-shrink-0">
            <Leaf className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <h1 className="text-lg md:text-xl font-bold text-gray-900">SABZA</h1>
            <p className="text-xs md:text-sm text-gray-600">Carbon Dashboard</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <Button
            variant="outline"
            size="icon"
            className="relative border-green-600 text-green-600 bg-white"
          >
            <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="absolute -top-1 -right-1 h-2 w-2 sm:h-3 sm:w-3 bg-red-500 rounded-full" />
          </Button>

          <Avatar className="bg-green-600 text-white rounded-lg">
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
