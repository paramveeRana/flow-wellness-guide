
import React from "react";
import { Book, FileText, Link as LinkIcon, Video } from "lucide-react";

const Resources = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center">Resources</h1>
        <p className="text-center text-muted-foreground mt-2">
          Educational materials about menstrual and reproductive health
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-card rounded-lg border shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <Book className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-semibold">Articles</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FileText className="h-5 w-5 mr-2 text-muted-foreground shrink-0 mt-0.5" />
                <a href="#" className="hover:underline">Understanding Your Menstrual Cycle Phases</a>
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 mr-2 text-muted-foreground shrink-0 mt-0.5" />
                <a href="#" className="hover:underline">Common Menstrual Disorders and When to See a Doctor</a>
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 mr-2 text-muted-foreground shrink-0 mt-0.5" />
                <a href="#" className="hover:underline">Nutrition and Your Menstrual Cycle</a>
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 mr-2 text-muted-foreground shrink-0 mt-0.5" />
                <a href="#" className="hover:underline">Exercise and Menstrual Health</a>
              </li>
            </ul>
          </div>
          
          <div className="bg-card rounded-lg border shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-semibold">Videos</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Video className="h-5 w-5 mr-2 text-muted-foreground shrink-0 mt-0.5" />
                <a href="#" className="hover:underline">The Science of the Menstrual Cycle Explained</a>
              </li>
              <li className="flex items-start">
                <Video className="h-5 w-5 mr-2 text-muted-foreground shrink-0 mt-0.5" />
                <a href="#" className="hover:underline">Managing Period Pain: Expert Advice</a>
              </li>
              <li className="flex items-start">
                <Video className="h-5 w-5 mr-2 text-muted-foreground shrink-0 mt-0.5" />
                <a href="#" className="hover:underline">Hormonal Health Through the Years</a>
              </li>
              <li className="flex items-start">
                <Video className="h-5 w-5 mr-2 text-muted-foreground shrink-0 mt-0.5" />
                <a href="#" className="hover:underline">Myths and Facts About Menstruation</a>
              </li>
            </ul>
          </div>
          
          <div className="bg-card rounded-lg border shadow-sm p-6 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <LinkIcon className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-semibold">Helpful Links</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <LinkIcon className="h-5 w-5 mr-2 text-muted-foreground shrink-0 mt-0.5" />
                  <a href="#" className="hover:underline">American College of Obstetricians and Gynecologists</a>
                </li>
                <li className="flex items-start">
                  <LinkIcon className="h-5 w-5 mr-2 text-muted-foreground shrink-0 mt-0.5" />
                  <a href="#" className="hover:underline">Office on Women's Health</a>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <LinkIcon className="h-5 w-5 mr-2 text-muted-foreground shrink-0 mt-0.5" />
                  <a href="#" className="hover:underline">Endometriosis Foundation of America</a>
                </li>
                <li className="flex items-start">
                  <LinkIcon className="h-5 w-5 mr-2 text-muted-foreground shrink-0 mt-0.5" />
                  <a href="#" className="hover:underline">PCOS Awareness Association</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
