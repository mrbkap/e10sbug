all:
	rm -f extension.xpi
	zip -r extension.xpi . -x '.git*' -x Makefile

install: all
	cp extension.xpi ~/public_html/
