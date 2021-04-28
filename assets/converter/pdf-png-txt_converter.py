import PIL
import pytesseract
from os import listdir, getcwd, linesep
from os.path import isfile, join
import sys
import time
import threading
import re
from pdf2image import convert_from_path

def spin_cursor():
    while True:
        for cursor in '⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏':
            sys.stdout.write(cursor)
            sys.stdout.flush()
            time.sleep(0.1) # adjust this to change the speed
            sys.stdout.write('\b')
            if done:
                return

def convert_pdf_to_png_to_txt():
    # Get All PDF in current workdir
    pdf_in_workdir = [f for f in listdir(getcwd()) if isfile(join(getcwd(), f)) and f.split(".")[-1] == "pdf"]
    # Loop through all pdf
    for i1,f in enumerate(pdf_in_workdir):
        # pdf to png
        images = convert_from_path(f,500)
        # loop through every page of pdf
        for i2,image in enumerate(images):
            # crop image
            image = image.crop((160,340,3945,5266))
            # get size of cropped image
            width, height = image.size
            # loop through dimensions
            for x in range(width):
                for y in range(height):
                    # if height is between 2482 and 2638
                    if 2482 <= y <= 2638:
                        # replace with white
                        image.putpixel((x, y), (255, 255, 255))
            # save cropped and filtered image as png
            image.save(f"{f}{i2}.png")
            # open text file
            with open(f"{f}{i2}.txt", 'w', encoding = 'utf-8') as t:
                # convert image to text
                text = pytesseract.image_to_string(image, lang='deu').strip()
                # remove empty lines
                beautifed_text = re.sub(r'\n\s*\n', '\n', text, flags=re.MULTILINE)
                # save file
                t.write(beautifed_text)
            # print that done
            print(f"\r{i1}:{i2}: ✅")

# Start Spinner
try:
    done = False
    spin_thread = threading.Thread(target=spin_cursor)
    spin_thread.daemon = True
    spin_thread.start()
    # Wait for Conversion to Finish
    convert_pdf_to_png_to_txt()
    # Stop Spinner
    done = True
    spin_thread.join()
    # Done
    print(f"All Done ✅")
except (KeyboardInterrupt, SystemExit):
    print('\r❌ Received keyboard interrupt, quitting threads.\n')