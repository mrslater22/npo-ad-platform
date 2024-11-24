import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>For Nonprofits</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Nonprofit Organizations
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Create campaigns, connect with supporters, and manage your cause.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/nonprofits/campaigns" title="Campaigns">
                Create and manage fundraising campaigns
              </ListItem>
              <ListItem href="/nonprofits/analytics" title="Analytics">
                Track your impact and engagement
              </ListItem>
              <ListItem href="/nonprofits/resources" title="Resources">
                Guides and tools for success
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>For Supporters</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/supporters/discover" title="Discover Causes">
                Find and support causes you care about
              </ListItem>
              <ListItem href="/supporters/rewards" title="Rewards">
                Exclusive offers and benefits
              </ListItem>
              <ListItem href="/supporters/impact" title="Impact">
                Track your giving impact
              </ListItem>
              <ListItem href="/supporters/community" title="Community">
                Connect with other supporters
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>For Businesses</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/business/sponsorship" title="Sponsorship">
                Partner with nonprofits
              </ListItem>
              <ListItem href="/business/marketing" title="Marketing">
                Reach engaged audiences
              </ListItem>
              <ListItem href="/business/impact" title="Social Impact">
                Measure your community impact
              </ListItem>
              <ListItem href="/business/resources" title="Resources">
                Tools and guides for businesses
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";