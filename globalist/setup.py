#!/usr/bin/env python3

from distutils.core import setup

setup(
    name='Globalist',
    version='0.0.6.1',
    description='Globalist distributed git onions',
    author='fnordomat',
#    author_email='',
    url='https://github.com/fnordomat/Globalist',
    packages=['globalist'],
    scripts=['Globalist.py'],
    install_requires=['stem>=1.5.0'],
    license='GPLv3'
)

