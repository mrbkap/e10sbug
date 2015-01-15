all:
	rm -f extension.xpi
	zip -r extension.xpi . -x '.git*' -x Makefile -x .*.sw*

install: all
	cp extension.xpi ~/public_html/
