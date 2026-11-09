/* Study content. Each chapter has levels; each level is a list of questions:
   [question, [option A, B, C, D], index of correct option (0-3), explanation, optional hint]
   To add harder questions, append a new level array to a chapter. To add a subject, fill its chapters list. */
window.CONTENT = {
 "subjects": [
  {
   "id": "physics",
   "name": "Physics",
   "chapters": [
    {
     "n": 1,
     "t": "Electric Charges and Fields",
     "levels": [
      [
       [
        "Which of these charges can NOT exist on a body?",
        [
         "1.6 × 10⁻¹⁹ C",
         "3.2 × 10⁻¹⁹ C",
         "2.4 × 10⁻¹⁹ C",
         "4.8 × 10⁻¹⁹ C"
        ],
        2,
        "q = ne, so the charge must be a whole-number multiple of 1.6 × 10⁻¹⁹ C. 2.4 × 10⁻¹⁹ C is 1.5e, which is not allowed.",
        "Charge is quantised: q = ne."
       ],
       [
        "Two point charges repel with force F. If each charge is doubled and the distance is halved, the new force is:",
        [
         "4F",
         "8F",
         "16F",
         "F"
        ],
        2,
        "F ∝ q₁q₂/r². Doubling both charges gives ×4, and halving r gives ×4, so the force becomes 16F."
       ],
       [
        "Which statement about electrostatic field lines is FALSE?",
        [
         "They start on positive charges and end on negative charges",
         "Two field lines never cross",
         "They can form closed loops",
         "They are closer together where the field is stronger"
        ],
        2,
        "Electrostatic field lines never form closed loops, because the electrostatic field is conservative. Magnetic field lines do form closed loops."
       ],
       [
        "A closed surface encloses charges +q and −q. The net electric flux through it is:",
        [
         "2q/ε₀",
         "q/ε₀",
         "Zero",
         "Depends on the shape of the surface"
        ],
        2,
        "By Gauss’s law, flux = (net enclosed charge)/ε₀. The net enclosed charge is zero, so the flux is zero, whatever the shape."
       ],
       [
        "An electric dipole is placed in a uniform field E with its dipole moment at 90° to E. The net force and torque are:",
        [
         "Force zero, torque pE",
         "Force pE, torque zero",
         "Both zero",
         "Both maximum"
        ],
        0,
        "In a uniform field the forces on +q and −q cancel, so the net force is zero. The torque is τ = pE sin θ, which equals pE at 90°."
       ],
       [
        "For a short dipole, at the same distance r, what is the ratio of the axial field to the equatorial field (magnitudes)?",
        [
         "1 : 1",
         "2 : 1",
         "1 : 2",
         "4 : 1"
        ],
        1,
        "E(axial) = 2kp/r³ and E(equatorial) = kp/r³, so the ratio is 2 : 1. The two fields also point in opposite directions."
       ],
       [
        "The field due to an infinitely long, uniformly charged straight wire varies with distance r as:",
        [
         "1/r²",
         "1/r",
         "Independent of r",
         "1/r³"
        ],
        1,
        "Gauss’s law with a cylindrical surface gives E = λ/(2πε₀r), so E ∝ 1/r."
       ],
       [
        "The electric field near a uniformly charged infinite plane sheet of surface charge density σ is:",
        [
         "σ/ε₀, decreasing with distance",
         "σ/2ε₀, independent of distance",
         "σ/2ε₀, decreasing with distance",
         "2σ/ε₀"
        ],
        1,
        "E = σ/2ε₀, and it does not depend on the distance from the sheet. A favourite one-mark question."
       ],
       [
        "What is the electric field inside a uniformly charged thin spherical shell?",
        [
         "Maximum at the centre",
         "kq/R²",
         "Zero",
         "Increases linearly with r"
        ],
        2,
        "A Gaussian sphere drawn inside the shell encloses no charge, so the field inside is zero everywhere."
       ],
       [
        "A charge q is at the centre of a cube. The electric flux through ONE face is:",
        [
         "q/ε₀",
         "q/6ε₀",
         "q/4ε₀",
         "6q/ε₀"
        ],
        1,
        "The total flux is q/ε₀, shared equally by 6 faces, so one face gets q/6ε₀.",
        "By symmetry, all six faces share the flux equally."
       ],
       [
        "Electrostatics is the study of:",
        [
         "forces on charges moving with a constant velocity",
         "forces, fields and potentials arising from static charges",
         "magnetic fields produced by steady currents",
         "charges flowing through a conductor"
        ],
        1,
        "Static means not changing with time, so electrostatics deals with forces, fields and potentials due to charges at rest."
       ],
       [
        "A glass rod is rubbed with silk. Which statement is correct?",
        [
         "Protons pass from the rod to the silk, so the rod becomes positive",
         "Electrons pass from the silk to the rod, so the rod becomes negative",
         "New positive charge is created on the rod and new negative charge on the silk",
         "Electrons pass from the rod to the silk, so the rod becomes positive and the silk negative"
        ],
        3,
        "Loosely bound electrons move from glass to silk. No new charge is created, and only a tiny fraction of the electrons is transferred."
       ],
       [
        "In a gold-leaf electroscope, a charged body touches the metal knob and the leaves diverge. This is because:",
        [
         "charge flows on to both leaves, which then repel each other",
         "the leaves acquire charges of opposite sign and attract each other",
         "the glass box attracts the two leaves",
         "the knob becomes neutral and the leaves become heavier"
        ],
        0,
        "Both leaves get the same kind of charge and repel. The greater the divergence, the greater the charge."
       ],
       [
        "Why does a plastic comb get charged on rubbing, but a metal spoon held in the bare hand does not?",
        [
         "Metals have no electrons that can be transferred",
         "Plastic has more electrons than metal",
         "The charge on the metal leaks through the body to the ground, as both are conductors",
         "Rubbing cannot transfer charge to a metal"
        ],
        2,
        "Charge on a conductor flows away through the body to earth. On an insulator it stays where it is."
       ],
       [
        "Two charged spheres can be treated as point charges when:",
        [
         "they are made of metal",
         "their sizes are much larger than the distance between them",
         "their sizes are very small compared with the distance between them",
         "they carry equal charges"
        ],
        2,
        "A body is a point charge when its size is negligible compared with the separation, so all its charge may be taken at one point."
       ],
       [
        "A system has charges +3 nC, −5 nC, +4 nC, −2 nC and +6 nC. Its total charge is:",
        [
         "+6 nC",
         "−6 nC",
         "+20 nC",
         "+13 nC"
        ],
        0,
        "Charges add algebraically with their signs: 3 − 5 + 4 − 2 + 6 = +6 nC."
       ],
       [
        "A glass rod rubbed with silk gains a charge of +3.2 × 10⁻⁹ C. The charge on the silk is:",
        [
         "+3.2 × 10⁻⁹ C",
         "zero",
         "−6.4 × 10⁻⁹ C",
         "−3.2 × 10⁻⁹ C"
        ],
        3,
        "Charge is conserved: what one body gains the other loses, so the total of rod and silk stays zero."
       ],
       [
        "Three equal charges q sit at the vertices of an equilateral triangle, and a charge Q of the same sign is at its centroid. The net force on Q is:",
        [
         "directed towards one vertex",
         "zero",
         "directed away from the nearest side",
         "3Qq/(4πε₀l²), where l is the side"
        ],
        1,
        "The three equal forces (each 3Qq/4πε₀l²) act at 120° to each other, so they cancel by the superposition principle (NCERT Example 1.5)."
       ],
       [
        "A charge Q feels a force of 3 N due to charge q₁ and 4 N due to charge q₂, the two forces being at right angles. The net force on Q is:",
        [
         "5 N",
         "7 N",
         "1 N",
         "12 N"
        ],
        0,
        "By superposition each force is unaffected by the other charge, and they add as vectors: √(3² + 4²) = 5 N."
       ],
       [
        "What is the electric field at a distance of 30 cm from a point charge of 2 µC?",
        [
         "6 × 10⁴ N/C",
         "6 × 10⁵ N/C",
         "2 × 10⁵ N/C",
         "2 × 10⁶ N/C"
        ],
        2,
        "E = kq/r² = (9 × 10⁹ × 2 × 10⁻⁶)/(0.3)² = 2 × 10⁵ N/C."
       ],
       [
        "A −2 µC charge is placed at a point where the electric field is 5 × 10³ N/C towards the east. The force on it is:",
        [
         "1.0 × 10⁻² N towards the east",
         "1.0 × 10⁻² N towards the west",
         "2.5 × 10⁻³ N towards the west",
         "1.0 × 10⁻⁸ N towards the west"
        ],
        1,
        "F = qE, so its magnitude is 2 × 10⁻⁶ × 5 × 10³ = 10⁻² N. The charge is negative, so the force is opposite to E."
       ],
       [
        "A charge +q and a charge −q lie on a line, and a point P is exactly midway between them, at distance d from each. The electric field at P is:",
        [
         "zero",
         "kq/d², directed towards −q",
         "2kq/d², directed towards +q",
         "2kq/d², directed towards −q"
        ],
        3,
        "At P the field of +q points away from +q, and that of −q points towards −q. These are the same direction, so the two fields add."
       ],
       [
        "Which statement about the electric field is correct?",
        [
         "It is a scalar field because charge is a scalar",
         "It exists only at points where a test charge is placed",
         "A change in the source charge is felt instantly at any distance",
         "It is a property of the source charges and does not depend on the test charge used to find it"
        ],
        3,
        "E = F/q does not depend on q, and the field exists at every point in space. Changes spread at the speed of light, not instantly."
       ],
       [
        "The electric flux through a plane area of 0.5 m² in a uniform field of 200 N/C, when the normal to the area makes 60° with the field, is:",
        [
         "100 N m² C⁻¹",
         "50 N m² C⁻¹",
         "86.6 N m² C⁻¹",
         "zero"
        ],
        1,
        "φ = E S cos θ = 200 × 0.5 × cos 60° = 50 N m² C⁻¹."
       ],
       [
        "Charges +2 µC and −2 µC are 4 mm apart. Their dipole moment is:",
        [
         "8 × 10⁻⁹ C m, directed from +2 µC to −2 µC",
         "4 × 10⁻⁹ C m, directed from −2 µC to +2 µC",
         "8 × 10⁻⁹ C m, directed from −2 µC to +2 µC",
         "zero, because the total charge is zero"
        ],
        2,
        "p = q × 2a = 2 × 10⁻⁶ × 4 × 10⁻³ = 8 × 10⁻⁹ C m. By convention, p points from the negative to the positive charge."
       ],
       [
        "Which of these molecules has a permanent electric dipole moment?",
        [
         "H₂O",
         "CO₂",
         "CH₄",
         "None of them; only ions can have a dipole moment"
        ],
        0,
        "In H₂O the centres of positive and negative charge do not coincide, so it is a polar molecule. In CO₂ and CH₄ they coincide."
       ],
       [
        "A sphere of radius 10 cm carries a charge of 4π × 10⁻⁸ C spread uniformly over its surface. The surface charge density is:",
        [
         "4 × 10⁻⁶ C m⁻²",
         "10⁻⁶ C m⁻²",
         "10⁻⁴ C m⁻²",
         "10⁻⁸ C m⁻²"
        ],
        1,
        "σ = Q/area = 4π × 10⁻⁸ / (4π × 0.1²) = 10⁻⁶ C m⁻²."
       ],
       [
        "Gauss’s law is a convenient way to find the electric field when:",
        [
         "all the charges present are of the same sign",
         "there are only a few charges",
         "the electric field is zero everywhere",
         "the charge distribution has high symmetry, so a suitable Gaussian surface can be chosen"
        ],
        3,
        "With spherical, cylindrical or planar symmetry, E has constant magnitude and a fixed direction on the Gaussian surface, so E comes out of the flux integral."
       ]
      ],
      [
       [
        "On a dry day, a student slides along a synthetic car seat and gets a shock on touching the metal door handle. Which explanation is correct?",
        [
         "Rubbing moved electrons between the insulating surfaces, so charge built up on her body and discharged through the conductor on touching the metal",
         "Rubbing created new net charge out of nothing on the seat, which then flowed to the handle",
         "Metals are insulators, so charge on the handle jumped across to her",
         "Only protons can be transferred by rubbing, and they discharged through the door"
        ],
        0,
        "Charge accumulated on insulating surfaces by rubbing discharges through the body when it touches a conductor. Charge is only transferred, never created."
       ],
       [
        "Assertion (A): When a glass rod is rubbed with silk, the glass rod becomes positively charged.\nReason (R): Protons are transferred from the silk cloth to the glass rod.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "Glass loses electrons to silk and so becomes positive. Protons are bound in nuclei and are not transferred, so R is false."
       ],
       [
        "When a glass rod is rubbed with silk, 3 × 10¹² electrons pass from the rod to the silk. The charges on the rod and the silk are respectively:",
        [
         "−4.8 × 10⁻⁷ C and +4.8 × 10⁻⁷ C",
         "+4.8 × 10⁻⁷ C and +4.8 × 10⁻⁷ C",
         "+4.8 × 10⁻⁷ C and −4.8 × 10⁻⁷ C",
         "+9.6 × 10⁻⁷ C and −9.6 × 10⁻⁷ C"
        ],
        2,
        "q = ne = 3 × 10¹² × 1.6 × 10⁻¹⁹ = 4.8 × 10⁻⁷ C. The rod loses electrons (positive), the silk gains them (negative), and the total stays zero."
       ],
       [
        "Assertion (A): A metal rod with a plastic handle can be charged by rubbing if it is held by the handle, but a metal spoon held in the bare hand cannot.\nReason (R): Electric charge is quantised.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        1,
        "A is true because the charge on a spoon leaks through the body to the ground, while the plastic handle blocks that path. Quantisation is true but has nothing to do with it."
       ],
       [
        "Coulomb’s law in the form F = kq₁q₂/r² can be applied directly to which pair?",
        [
         "Two metal spheres of radius 10 cm with centres 25 cm apart",
         "Two long charged rods, each 1 m long, kept 10 cm apart",
         "Two small beads of diameter 1 mm kept 20 cm apart",
         "Two large charged plates of side 50 cm kept 1 cm apart"
        ],
        2,
        "The formula holds for point charges, i.e. when the sizes are much smaller than the separation. Only the small beads satisfy this."
       ],
       [
        "A student finds the total charge of +5 nC, −3 nC, +2 nC and −8 nC as 5 + 3 + 2 + 8 = 18 nC. What is the error?",
        [
         "Charge is a scalar that adds algebraically with its sign, so the total is −4 nC",
         "Charges add as vectors, so the answer depends on their directions",
         "Only positive charges count, so the total is +7 nC",
         "Negative charges must be added and positive ones subtracted, so the total is +4 nC"
        ],
        0,
        "Total charge = (+5) + (−3) + (+2) + (−8) = −4 nC. Charge has magnitude but no direction, and the signs must be kept."
       ],
       [
        "A student says: When a neutron turns into a proton and an electron, charge is not conserved, because two charged particles appear from a neutral one. What is wrong with this?",
        [
         "Charged particles can never be created, so such a decay cannot happen",
         "The electron produced is positive, so the total charge becomes +2e",
         "Charge conservation applies only to charging by rubbing",
         "The proton (+e) and electron (−e) have equal and opposite charges, so the net charge stays zero; charged particles may be created, but net charge cannot"
        ],
        3,
        "Conservation of charge refers to the net charge of an isolated system. The pair created has zero net charge, the same as the neutron."
       ],
       [
        "Electrons leave a body at the rate of 10¹¹ per second. How long does it take the body to collect a charge of 1 µC?",
        [
         "6.25 s",
         "62.5 s",
         "625 s",
         "1.6 s"
        ],
        1,
        "Charge per second = 10¹¹ × 1.6 × 10⁻¹⁹ = 1.6 × 10⁻⁸ C. Time = 10⁻⁶ / 1.6 × 10⁻⁸ = 62.5 s (NCERT Example 1.1 method).",
        "Find the charge leaving per second first."
       ],
       [
        "An oil drop of mass 4.8 × 10⁻¹⁵ kg hangs at rest in a uniform vertical electric field of 9.8 × 10⁴ N/C (g = 9.8 m/s²). The number of excess electrons on the drop is:",
        [
         "3",
         "2",
         "4",
         "6"
        ],
        0,
        "qE = mg gives q = 4.8 × 10⁻¹⁹ C. Since q = ne, n = 4.8 × 10⁻¹⁹ / 1.6 × 10⁻¹⁹ = 3.",
        "Balance the electric force against the weight, then use q = ne."
       ],
       [
        "Two identical metal spheres carry +8 µC and −2 µC. They are touched together and then placed with centres 30 cm apart. The force between them is:",
        [
         "0.9 N, attractive",
         "1.6 N, attractive",
         "0.9 N, repulsive",
         "2.5 N, repulsive"
        ],
        2,
        "By symmetry the charge (8 − 2) = 6 µC splits equally, 3 µC each. F = 9 × 10⁹ × (3 × 10⁻⁶)² / (0.3)² = 0.9 N, repulsive.",
        "Identical spheres share the net charge equally."
       ],
       [
        "A charge Q is divided into two parts q and (Q − q), which are then placed a fixed distance apart. For the force between them to be maximum, q must be:",
        [
         "Q/4",
         "Q/2",
         "Q/3",
         "2Q/3"
        ],
        1,
        "F ∝ q(Q − q), which is maximum when q = Q/2. The maximum force is kQ²/4r².",
        "F ∝ q(Q − q)."
       ],
       [
        "A +2 µC charge is at x = 0 and a −2 µC charge is at x = 0.3 m, both on the x-axis. The force on a +1 µC charge at x = 0.1 m is:",
        [
         "1.35 N towards +x",
         "2.25 N towards −x",
         "1.8 N towards +x",
         "2.25 N towards +x"
        ],
        3,
        "The +2 µC repels it: 9 × 10⁹ × 2 × 10⁻⁶ × 10⁻⁶ / (0.1)² = 1.8 N towards +x. The −2 µC attracts it: 0.45 N, also towards +x. The total is 2.25 N."
       ],
       [
        "Equal charges q are placed at three corners of a square of side a. The force on an identical charge q at the fourth corner is:",
        [
         "(√2 + 2) kq²/a²",
         "3kq²/a²",
         "(√2 − ½) kq²/a²",
         "(√2 + ½) kq²/a²"
        ],
        3,
        "The two adjacent charges give forces kq²/a² at right angles, with resultant √2 kq²/a². The diagonal charge gives kq²/2a² in the same direction, so the total is (√2 + ½)kq²/a²."
       ],
       [
        "An electron is released from rest in a uniform electric field of 910 N/C. How long does it take to reach a speed of 8 × 10⁶ m/s (ignore gravity)?",
        [
         "1 × 10⁻⁷ s",
         "5 × 10⁻⁸ s",
         "2.5 × 10⁻⁸ s",
         "5 × 10⁻⁹ s"
        ],
        1,
        "a = eE/m = 1.6 × 10⁻¹⁹ × 910 / 9.1 × 10⁻³¹ = 1.6 × 10¹⁴ m/s². Then t = v/a = 8 × 10⁶ / 1.6 × 10¹⁴ = 5 × 10⁻⁸ s.",
        "a = eE/m, then t = v/a."
       ],
       [
        "Two positive charges, 4 µC and 1 µC, are 30 cm apart. The electric field is zero at a point:",
        [
         "10 cm from the 4 µC charge, between the charges",
         "15 cm from the 4 µC charge, at the midpoint",
         "20 cm from the 4 µC charge, between the charges",
         "60 cm from the 4 µC charge, beyond the 1 µC charge"
        ],
        2,
        "Between the charges the fields oppose: 4/x² = 1/(0.3 − x)², so x = 0.2 m. Beyond the 1 µC charge both fields point the same way and cannot cancel."
       ],
       [
        "Charges +q, +q, +q and −q are at the four corners of a square of side a, with −q diagonally opposite one of the +q charges. The magnitude of the field at the centre is:",
        [
         "4kq/a²",
         "0",
         "2kq/a²",
         "8kq/a²"
        ],
        0,
        "Each charge is a/√2 from the centre, so each field is kq/(a²/2) = 2kq/a². The two +q charges on one diagonal cancel. The +q and −q on the other diagonal give fields in the same direction, so the total is 4kq/a²."
       ],
       [
        "Charge q₁ is suddenly shaken. Charge q₂ is 4.5 × 10⁸ m from it. The earliest time at which q₂ feels a changed force is:",
        [
         "0 s, because the force is instantaneous",
         "1.5 s",
         "3.0 s",
         "0.67 s"
        ],
        1,
        "Changes in the field travel at the speed of light, c = 3 × 10⁸ m/s. t = 4.5 × 10⁸ / 3 × 10⁸ = 1.5 s."
       ],
       [
        "A student draws electric field lines for some static charges. Which feature shows that the drawing cannot be an electrostatic field?",
        [
         "Lines crowded close together near a point charge",
         "Lines that start on a positive charge and end on a negative charge",
         "Equally spaced parallel straight lines in a region",
         "A line that leaves a positive charge and curves back to end on the same charge"
        ],
        3,
        "Electrostatic field lines never form closed loops, since the electrostatic field is conservative. The other features are all allowed."
       ],
       [
        "A student writes: The plane surface of area 2 m² makes 30° with a uniform field of 100 N/C, so φ = 100 × 2 × cos 30° = 173 N m² C⁻¹. What is the error?",
        [
         "The 30° is between the surface and the field, not between the normal and the field; the correct flux is 100 N m² C⁻¹",
         "There is no error; the flux is 173 N m² C⁻¹",
         "Area is a scalar, so no angle is needed and the flux is 200 N m² C⁻¹",
         "The flux through an inclined surface is always zero"
        ],
        0,
        "In φ = ES cos θ, θ is the angle between E and the normal. Here θ = 60°, so φ = 100 × 2 × 0.5 = 100 N m² C⁻¹."
       ],
       [
        "Two identical dipoles, each of dipole moment p, have the same centre and their axes are at right angles. Together they behave like a single dipole of moment:",
        [
         "2p, along either axis",
         "p, along the bisector",
         "√2 p, along the bisector of the two axes",
         "p/√2, along the bisector"
        ],
        2,
        "Dipole moment is a vector, and fields superpose. The resultant of two perpendicular vectors of magnitude p is √(p² + p²) = √2 p."
       ],
       [
        "A short dipole has p = 3 × 10⁻⁹ C m. The electric fields at 30 cm from its centre on its axis and on its equatorial line are respectively:",
        [
         "1000 N/C along p, and 2000 N/C opposite to p",
         "2000 N/C along p, and 1000 N/C along p",
         "2000 N/C along p, and 1000 N/C opposite to p",
         "6000 N/C along p, and 3000 N/C opposite to p"
        ],
        2,
        "kp/r³ = 9 × 10⁹ × 3 × 10⁻⁹ / (0.3)³ = 1000 N/C. The axial field is twice this, along p. The equatorial field is this value, opposite to p.",
        "Axial 2kp/r³, equatorial kp/r³."
       ],
       [
        "A short dipole has charges ±q separated by 2a. If q is doubled and 2a is halved, the field at the same large distance on its axis:",
        [
         "remains the same",
         "doubles",
         "becomes half",
         "becomes four times"
        ],
        0,
        "For r ≫ a the field depends only on p = q × 2a (E = 2p/4πε₀r³). Doubling q and halving 2a leaves p unchanged."
       ],
       [
        "Which statement is correct?",
        [
         "CH₄ has a permanent dipole moment but CO₂ does not",
         "H₂O has no dipole moment because the molecule is neutral",
         "CO₂ and CH₄ stay non-polar even in a strong electric field",
         "CO₂ has no dipole moment without a field, but acquires one when a field is applied, whereas H₂O has a permanent dipole moment"
        ],
        3,
        "In CO₂ and CH₄ the centres of positive and negative charge coincide, so p = 0, but a field induces a dipole moment. In H₂O they do not coincide, so it is polar."
       ],
       [
        "A dipole of moment 4 × 10⁻⁹ C m is placed in a uniform field of 5 × 10⁴ N/C at 30° to the field. The net force and the torque are:",
        [
         "net force zero; torque 1.7 × 10⁻⁴ N m",
         "net force zero; torque 1.0 × 10⁻⁴ N m",
         "net force zero; torque 2.0 × 10⁻⁴ N m",
         "net force 2 × 10⁻⁴ N; torque 1.0 × 10⁻⁴ N m"
        ],
        1,
        "In a uniform field the forces on the two charges cancel. τ = pE sin θ = 4 × 10⁻⁹ × 5 × 10⁴ × 0.5 = 1.0 × 10⁻⁴ N m."
       ],
       [
        "A charged comb attracts small uncharged bits of paper. Which explanation is correct?",
        [
         "The comb’s field induces a dipole moment in the paper, and because the field is non-uniform, the dipole feels a net force towards the comb",
         "The paper carries a net charge opposite to that of the comb",
         "A uniform field of the comb exerts a net force on the induced dipole",
         "The comb’s field only twists the paper and gives no net force"
        ],
        0,
        "A dipole in a non-uniform field feels a net force. The induced dipole lines up with the field, so the force is towards the stronger field near the comb."
       ],
       [
        "A thin wire is bent into a circle of radius 0.5 m and carries a uniform linear charge density of 2 µC/m. The total charge on it is:",
        [
         "3.14 µC",
         "12.6 µC",
         "6.28 µC",
         "1.0 µC"
        ],
        2,
        "Q = λ × length = 2 × 10⁻⁶ × 2π × 0.5 = 6.28 × 10⁻⁶ C."
       ],
       [
        "A closed surface encloses charges +3 nC, −5 nC and +4 nC, and a charge of +10 nC lies outside it. The net flux through the surface is about:",
        [
         "1.36 × 10³ N m² C⁻¹",
         "2.26 × 10² N m² C⁻¹",
         "1.13 × 10³ N m² C⁻¹",
         "zero"
        ],
        1,
        "Only the enclosed charge counts: q = 3 − 5 + 4 = 2 nC. φ = q/ε₀ = 2 × 10⁻⁹ / 8.85 × 10⁻¹² ≈ 226 N m² C⁻¹."
       ],
       [
        "Assertion (A): If the net electric flux through a closed surface is zero, the electric field must be zero at every point on that surface.\nReason (R): By Gauss’s law, the flux through a closed surface equals the net enclosed charge divided by ε₀.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "Zero flux only means zero net enclosed charge. The field at points of the surface can be non-zero, for example with a dipole inside or charges outside, so A is false while R is true."
       ],
       [
        "Gauss’s law can be used directly to find the electric field of:",
        [
         "an electric dipole",
         "a charged rod of finite length",
         "a uniformly charged square plate of side 10 cm",
         "a uniformly charged thin spherical shell"
        ],
        3,
        "The shell has spherical symmetry, so E is constant in magnitude and radial on a concentric Gaussian sphere. The other distributions lack such symmetry."
       ],
       [
        "A long straight wire carries 2 µC uniformly spread over 4 m. Ignoring end effects, the field 10 cm from the middle of the wire is:",
        [
         "4.5 × 10⁴ N/C",
         "9 × 10³ N/C",
         "1.8 × 10⁵ N/C",
         "9 × 10⁴ N/C"
        ],
        3,
        "λ = 2 µC / 4 m = 0.5 µC/m. E = λ/2πε₀r = 2 × 9 × 10⁹ × 0.5 × 10⁻⁶ / 0.1 = 9 × 10⁴ N/C."
       ],
       [
        "A large plane sheet has σ = 8.85 × 10⁻⁸ C m⁻². A 2 µC charge is placed 10 cm from it, and later 1 m from it. The force on the charge is:",
        [
         "2.0 × 10⁻² N at both distances",
         "1.0 × 10⁻² N at both distances",
         "1.0 × 10⁻² N at 10 cm and 1.0 × 10⁻⁴ N at 1 m",
         "2.0 × 10⁻² N at 10 cm and 2.0 × 10⁻³ N at 1 m"
        ],
        1,
        "E = σ/2ε₀ = 5000 N/C, independent of distance. F = qE = 2 × 10⁻⁶ × 5000 = 1.0 × 10⁻² N."
       ],
       [
        "Assertion (A): The electric field of an infinite uniformly charged plane sheet does not depend on the distance from the sheet.\nReason (R): For a Gaussian pillbox, Gauss’s law gives 2EA = σA/ε₀, in which the area A cancels and no distance appears.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Gauss’s law gives E = σ/2ε₀ with no distance term, which is exactly why E is the same at every distance."
       ],
       [
        "A thin spherical shell of radius 10 cm has σ = 8.85 × 10⁻⁶ C m⁻². The fields at 30 cm and at 5 cm from its centre are respectively:",
        [
         "1.0 × 10⁶ N/C and zero",
         "1.1 × 10⁵ N/C and 4.0 × 10⁶ N/C",
         "1.1 × 10⁵ N/C and zero",
         "1.0 × 10⁶ N/C and 1.1 × 10⁵ N/C"
        ],
        2,
        "Outside, E = σR²/ε₀r² = 10⁶ × (0.1)²/(0.3)² = 1.1 × 10⁵ N/C. Inside, the Gaussian sphere encloses no charge, so E = 0."
       ],
       [
        "A student says: A charged thin shell has all its charge on the surface, so inside it E = kq/R² at every point. What is wrong?",
        [
         "A Gaussian sphere inside the shell encloses no charge, so E = 0 everywhere inside",
         "The surface value is right, but E increases linearly with r inside",
         "Inside the shell E = kq/r², not kq/R²",
         "The shell has no charge inside, so E is undefined there"
        ],
        0,
        "By Gauss’s law, E × 4πr² = 0 for r < R, so the field inside a thin uniformly charged shell is zero."
       ]
      ]
     ]
    },
    {
     "n": 2,
     "t": "Electrostatic Potential and Capacitance",
     "levels": [
      [
       [
        "What is the work done in moving a charge q between two points on an equipotential surface?",
        [
         "qV",
         "Depends on the path",
         "Zero",
         "Infinite"
        ],
        2,
        "W = q(V₂ − V₁), and on an equipotential surface V₂ = V₁, so W = 0."
       ],
       [
        "At any point, the electric field relative to the equipotential surface through that point is:",
        [
         "Parallel to the surface",
         "Perpendicular to the surface, towards decreasing potential",
         "Perpendicular to the surface, towards increasing potential",
         "At 45° to the surface"
        ],
        1,
        "E = −dV/dr. The field is always perpendicular to equipotential surfaces and points towards decreasing potential."
       ],
       [
        "What is the potential at any point on the equatorial line of an electric dipole?",
        [
         "Maximum",
         "kp/r²",
         "Zero",
         "Infinite"
        ],
        2,
        "Every point on the equatorial line is equidistant from +q and −q, so their potentials cancel: V = 0. The field there is NOT zero."
       ],
       [
        "Inside a charged conductor in electrostatic equilibrium:",
        [
         "E = 0, V = 0",
         "E = 0, V = constant (same as surface)",
         "E constant, V = 0",
         "E maximum, V maximum"
        ],
        1,
        "E = 0 inside a conductor, so the potential has no gradient and is constant throughout, equal to the surface potential."
       ],
       [
        "A parallel plate capacitor has capacitance C in air. When the gap is completely filled with a dielectric of constant K, the capacitance becomes:",
        [
         "C/K",
         "C",
         "KC",
         "K²C"
        ],
        2,
        "C = Kε₀A/d, so filling the gap with a dielectric multiplies the capacitance by K."
       ],
       [
        "A capacitor is charged and then disconnected from the battery. A dielectric slab (constant K) is then inserted. The stored energy:",
        [
         "Increases K times",
         "Decreases to 1/K",
         "Stays the same",
         "Becomes zero"
        ],
        1,
        "With the battery disconnected, Q stays the same. C becomes KC, so U = Q²/2C becomes U/K.",
        "Battery disconnected means Q stays constant. Use U = Q²/2C."
       ],
       [
        "2 µF and 3 µF capacitors are connected in series. The equivalent capacitance is:",
        [
         "1.2 µF",
         "5 µF",
         "6 µF",
         "0.83 µF"
        ],
        0,
        "1/C = 1/2 + 1/3 = 5/6, so C = 1.2 µF. The series value is always less than the smallest capacitor."
       ],
       [
        "A 12 pF capacitor is connected to a 50 V battery. What is the energy stored?",
        [
         "3.0 × 10⁻⁸ J",
         "1.5 × 10⁻⁸ J",
         "6.0 × 10⁻¹⁰ J",
         "1.5 × 10⁻¹⁰ J"
        ],
        1,
        "U = ½CV² = ½ × 12 × 10⁻¹² × 50² = 1.5 × 10⁻⁸ J. (NCERT Exercise 2.10)"
       ],
       [
        "Two positive charges are brought closer together. The potential energy of the system:",
        [
         "Increases",
         "Decreases",
         "Stays the same",
         "Becomes zero"
        ],
        0,
        "U = kq₁q₂/r is positive for like charges. Decreasing r increases U, because work is done against the repulsion."
       ],
       [
        "At a point near a point charge, V = 600 V and E = 200 N/C. How far is the point from the charge?",
        [
         "0.33 m",
         "1.5 m",
         "3 m",
         "9 m"
        ],
        2,
        "V = kq/r and E = kq/r², so V/E = r = 600/200 = 3 m.",
        "Divide V by E."
       ],
       [
        "The work done by the electrostatic force in moving a charge from one point to another depends on:",
        [
         "The path taken",
         "The speed of the charge",
         "The time taken",
         "Only the initial and final positions"
        ],
        3,
        "Electrostatic force is conservative, so the work depends only on the end points and not on the path."
       ],
       [
        "The electrostatic potential at a point is defined as the work done by an external agent in:",
        [
         "Bringing a unit positive charge from infinity to that point, without acceleration",
         "Bringing any charge from infinity to that point",
         "Taking a unit negative charge from that point to infinity",
         "Moving a unit positive charge around a closed loop"
        ],
        0,
        "Potential is work done per unit positive charge in bringing it slowly from infinity to the point (taking V = 0 at infinity)."
       ],
       [
        "Charges 4 µC and −1 µC are each 30 cm from a point P. The potential at P is:",
        [
         "1.5 × 10⁵ V",
         "1.2 × 10⁵ V",
         "9 × 10⁴ V",
         "0"
        ],
        2,
        "Potentials add as scalars: V = 9 × 10⁹ × (4 − 1) × 10⁻⁶ / 0.3 = 9 × 10⁴ V.",
        "Add the potentials with their signs."
       ],
       [
        "An electron is accelerated from rest through a potential difference of 100 V. Its gain in kinetic energy is:",
        [
         "1.6 × 10⁻¹⁹ J",
         "1.6 × 10⁻¹⁷ J",
         "1.6 × 10⁻²¹ J",
         "100 J"
        ],
        1,
        "ΔK = eΔV = 100 eV = 100 × 1.6 × 10⁻¹⁹ = 1.6 × 10⁻¹⁷ J."
       ],
       [
        "Two charges 2 nC and 3 nC are 6 cm apart, at points where an external field has potentials 50 V and 20 V respectively. The total potential energy of the system is:",
        [
         "9.0 × 10⁻⁷ J",
         "1.6 × 10⁻⁷ J",
         "7.4 × 10⁻⁷ J",
         "1.06 × 10⁻⁶ J"
        ],
        3,
        "U = q₁V(r₁) + q₂V(r₂) + q₁q₂/4πε₀r₁₂ = 1.0 × 10⁻⁷ + 6 × 10⁻⁸ + 9.0 × 10⁻⁷ = 1.06 × 10⁻⁶ J.",
        "Add the external-field terms to the mutual term."
       ],
       [
        "A dipole of moment 4 × 10⁻⁹ C m is in a uniform field of 5 × 10⁴ N/C, making 60° with the field. Taking U = 0 at 90°, its potential energy is:",
        [
         "+1.0 × 10⁻⁴ J",
         "−1.7 × 10⁻⁴ J",
         "−1.0 × 10⁻⁴ J",
         "−2.0 × 10⁻⁴ J"
        ],
        2,
        "U = −pE cosθ = −4 × 10⁻⁹ × 5 × 10⁴ × 0.5 = −1.0 × 10⁻⁴ J."
       ],
       [
        "Which of the following molecules is non-polar?",
        [
         "O₂",
         "HCl",
         "H₂O",
         "None; every molecule has a permanent dipole moment"
        ],
        0,
        "In O₂ the centres of positive and negative charge coincide, so there is no permanent dipole moment. HCl and H₂O are polar."
       ],
       [
        "The dipole moment per unit volume of a dielectric is called its:",
        [
         "Susceptibility",
         "Permittivity",
         "Dielectric constant",
         "Polarisation"
        ],
        3,
        "Polarisation P is the net dipole moment per unit volume; for linear dielectrics P = ε₀χₑE."
       ],
       [
        "A 5 µF capacitor carries a charge of 100 µC. The potential difference across it is:",
        [
         "500 V",
         "0.05 V",
         "20 V",
         "20 µV"
        ],
        2,
        "V = Q/C = 100 µC / 5 µF = 20 V."
       ],
       [
        "The maximum electric field a dielectric medium can withstand without breaking down is called its:",
        [
         "Permittivity",
         "Dielectric strength",
         "Dielectric constant",
         "Susceptibility"
        ],
        1,
        "This limit is the dielectric strength; for air it is about 3 × 10⁶ V m⁻¹."
       ],
       [
        "A parallel plate air capacitor has plates of area 0.01 m² separated by 1 mm. Its capacitance is about:",
        [
         "8.85 pF",
         "88.5 pF",
         "885 pF",
         "8.85 nF"
        ],
        1,
        "C = ε₀A/d = 8.85 × 10⁻¹² × 0.01 / 10⁻³ = 8.85 × 10⁻¹¹ F = 88.5 pF."
       ],
       [
        "Far from the edges, the electric field between the plates of a charged parallel plate capacitor (surface charge density ±σ) is:",
        [
         "σ/ε₀, uniform and directed from the positive to the negative plate",
         "σ/2ε₀, directed from the positive to the negative plate",
         "Zero",
         "2σ/ε₀, directed from the negative to the positive plate"
        ],
        0,
        "The fields of the two plates add between them to give σ/ε₀ and cancel outside."
       ],
       [
        "A 5 µF and a 10 µF capacitor are connected in parallel across a 12 V battery. The charge on the 10 µF capacitor is:",
        [
         "40 µC",
         "60 µC",
         "180 µC",
         "120 µC"
        ],
        3,
        "In parallel both have the same voltage, so Q = CV = 10 µF × 12 V = 120 µC."
       ],
       [
        "A cavity with no charge inside it lies within a conductor placed in an external electric field. The field inside the cavity is:",
        [
         "Equal to the external field",
         "Half the external field",
         "Zero, whatever the shape of the cavity",
         "Equal to the field at the surface of the conductor"
        ],
        2,
        "This is electrostatic shielding: the cavity is protected from outside electric influence."
       ],
       [
        "A charged conductor has surface charge density σ. The electric field just outside its surface is:",
        [
         "σ/2ε₀, normal to the surface",
         "σ/ε₀, normal to the surface",
         "Zero",
         "σ/ε₀, tangential to the surface"
        ],
        1,
        "E = (σ/ε₀) n̂ at the surface of a conductor, from Gauss’s law with a pill box."
       ]
      ],
      [
       [
        "A 2 µC charge is moved slowly from R to P against the repulsion of a fixed charge, the external agent doing 0.6 J of work. It is then released at P and returns to R under the electric force alone. Its kinetic energy on reaching R is:",
        [
         "0.6 J",
         "1.2 J",
         "Zero",
         "0.3 J"
        ],
        0,
        "The 0.6 J of external work is stored as potential energy. The electrostatic force is conservative, so the same 0.6 J returns as kinetic energy.",
        "Stored energy equals energy returned for a conservative force."
       ],
       [
        "An external agent does 4 mJ of work in bringing a 2 µC charge from infinity to a point P. The potential at another point Q is 1500 V. The work done by the external agent in taking the charge slowly from P to Q is:",
        [
         "+1 mJ",
         "−1 mJ",
         "+3 mJ",
         "−3 mJ"
        ],
        1,
        "V_P = 4 mJ / 2 µC = 2000 V. W = q(V_Q − V_P) = 2 × 10⁻⁶ × (−500) = −1 × 10⁻³ J.",
        "Find V at P first."
       ],
       [
        "The potential at a point 50 cm from a point charge is 360 V. The work done by an external agent in bringing a 5 nC charge slowly from 50 cm to 20 cm from the charge is:",
        [
         "4.5 × 10⁻⁶ J",
         "1.8 × 10⁻⁶ J",
         "2.7 × 10⁻⁶ J",
         "6.3 × 10⁻⁶ J"
        ],
        2,
        "V ∝ 1/r, so V at 20 cm = 360 × 50/20 = 900 V. W = q ΔV = 5 × 10⁻⁹ × (900 − 360) = 2.7 × 10⁻⁶ J.",
        "V is inversely proportional to r."
       ],
       [
        "A dipole has charges ±2 nC separated by 2 cm. Treating it as a point dipole, the potential at a point 40 cm from its centre, on a line making 60° with the dipole moment, is:",
        [
         "2.25 V",
         "1.95 V",
         "0.45 V",
         "1.125 V"
        ],
        3,
        "p = 2 × 10⁻⁹ × 0.02 = 4 × 10⁻¹¹ C m. V = p cosθ / 4πε₀r² = 9 × 10⁹ × 4 × 10⁻¹¹ × 0.5 / 0.16 = 1.125 V.",
        "Use V = p cosθ / (4πε₀r²)."
       ],
       [
        "A thin spherical shell of radius 10 cm carries a uniform charge of 2 µC. The work done by the electric field in moving a 1 nC charge from a point 30 cm from the centre to the centre of the shell is:",
        [
         "−1.2 × 10⁻⁴ J",
         "+1.2 × 10⁻⁴ J",
         "−1.8 × 10⁻⁴ J",
         "Zero, because the field inside is zero"
        ],
        0,
        "V at 30 cm = 6 × 10⁴ V. Inside, V equals the surface value 1.8 × 10⁵ V. W by field = q(V_i − V_f) = 10⁻⁹ × (6 × 10⁴ − 1.8 × 10⁵) = −1.2 × 10⁻⁴ J.",
        "Potential inside the shell equals the surface potential."
       ],
       [
        "Find the error. Two equal positive charges q are a distance d apart. A student says: the potential at the mid-point is zero because the fields of the two charges cancel there. The mistake is:",
        [
         "The field at the mid-point is not zero either",
         "Potentials add as scalars, so V = 4q/(4πε₀d), which is not zero",
         "The potential is 2q/(4πε₀d), taking the distance of each charge as d",
         "Nothing is wrong, since zero field always means zero potential"
        ],
        1,
        "Zero field does not imply zero potential. Each charge is d/2 away, so the two positive potentials add to 4q/(4πε₀d)."
       ],
       [
        "Assertion (A): The electric field at a point on an equipotential surface is tangential to the surface.\nReason (R): No work is done in moving a test charge along an equipotential surface.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "A is false: the field is normal to an equipotential surface. R is true, and it is the reason the field cannot have a tangential component."
       ],
       [
        "In a uniform field, the potential is 12 V at x = 2 cm and 6 V at x = 5 cm on the x-axis, and E has only an x-component. The field is:",
        [
         "200 V m⁻¹ along −x",
         "120 V m⁻¹ along +x",
         "200 V m⁻¹ along +x",
         "400 V m⁻¹ along +x"
        ],
        2,
        "E = −ΔV/Δx = −(6 − 12)/0.03 = +200 V m⁻¹. V falls along +x, so E points along +x.",
        "E points towards decreasing potential."
       ],
       [
        "Charges +2 µC, +2 µC and −2 µC are placed at the corners of an equilateral triangle of side 20 cm. The electrostatic potential energy of the system is:",
        [
         "−0.18 J",
         "+0.18 J",
         "−0.54 J",
         "+0.54 J"
        ],
        0,
        "U = (kq²/a)(+1 − 1 − 1) = −kq²/a = −9 × 10⁹ × 4 × 10⁻¹² / 0.2 = −0.18 J.",
        "Sum over the three pairs with signs."
       ],
       [
        "Find the error. A student finds the potential energy of charges 3 µC and −3 µC placed 30 cm apart as U = (9 × 10⁹)(3 × 10⁻⁶)(3 × 10⁻⁶)/0.3 = +0.27 J. The correct value is:",
        [
         "+0.27 J; nothing is wrong",
         "−0.27 J, because q₁q₂ is negative for unlike charges",
         "−0.54 J, because both charges contribute",
         "−0.9 J, because r must be squared"
        ],
        1,
        "U = kq₁q₂/r keeps the sign of q₁q₂, so U = −0.27 J. Unlike charges give negative potential energy."
       ],
       [
        "An electron starts from rest and is accelerated through 200 V. Its final speed is about:",
        [
         "5.9 × 10⁶ m s⁻¹",
         "1.2 × 10⁷ m s⁻¹",
         "8.4 × 10⁶ m s⁻¹",
         "7.0 × 10¹³ m s⁻¹"
        ],
        2,
        "½mv² = eΔV, so v = √(2 × 200 × 1.6 × 10⁻¹⁹ / 9.1 × 10⁻³¹) = 8.4 × 10⁶ m s⁻¹.",
        "Equate the kinetic energy to eΔV."
       ],
       [
        "A 3 nC charge and a −2 nC charge are 3 cm apart in an external field, at points where the external potentials are 200 V and 100 V respectively. The total electrostatic potential energy of the system is:",
        [
         "−1.8 × 10⁻⁶ J",
         "+4.0 × 10⁻⁷ J",
         "+2.2 × 10⁻⁶ J",
         "−1.4 × 10⁻⁶ J"
        ],
        3,
        "External part: 3 × 10⁻⁹ × 200 + (−2 × 10⁻⁹) × 100 = 4 × 10⁻⁷ J. Mutual part: 9 × 10⁹ × (−6 × 10⁻¹⁸)/0.03 = −1.8 × 10⁻⁶ J. Total = −1.4 × 10⁻⁶ J.",
        "Add the external terms and the mutual term."
       ],
       [
        "A dipole of moment 2 × 10⁻⁸ C m lies along a uniform field of 4 × 10⁴ N/C. The work done by an external torque in slowly rotating it through 60° is:",
        [
         "4.0 × 10⁻⁴ J",
         "8.0 × 10⁻⁴ J",
         "6.9 × 10⁻⁴ J",
         "1.2 × 10⁻³ J"
        ],
        0,
        "W = pE(cos0° − cos60°) = 2 × 10⁻⁸ × 4 × 10⁴ × 0.5 = 4.0 × 10⁻⁴ J.",
        "W = pE(cosθ₀ − cosθ₁)."
       ],
       [
        "Find the error. A student says: U = −pE cosθ, so at θ = 90° the energy of a dipole in a uniform field is −pE, the minimum possible. The mistake is:",
        [
         "The minimum is at θ = 180°, where U = −pE",
         "At θ = 90°, cosθ = 0 so U = 0 (the chosen reference); the minimum −pE occurs at θ = 0°",
         "At θ = 90° the energy is +pE",
         "U = −pE cosθ holds only for θ = 0°"
        ],
        1,
        "Putting θ = 90° gives U = 0, which is why that angle is chosen as the zero. U is least (−pE) when the dipole is aligned with the field."
       ],
       [
        "An isolated conducting sphere of radius 10 cm is at a potential of 900 V. The potential at its centre and the electric field just outside its surface are:",
        [
         "0 and 9 × 10³ V m⁻¹",
         "900 V and zero",
         "900 V and 9 × 10³ V m⁻¹",
         "900 V and 90 V m⁻¹"
        ],
        2,
        "Potential is constant inside a conductor, so V = 900 V at the centre. Just outside, E = kQ/R² = V/R = 900/0.1 = 9 × 10³ V m⁻¹.",
        "E = V/R at the surface of a sphere."
       ],
       [
        "Assertion (A): A cavity inside a charged conductor is shielded from the outside electric field.\nReason (R): Charges placed inside the cavity cannot produce any field outside the conductor.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "A is true (electrostatic shielding). R is false: charge inside the cavity induces charge on the outer surface, so the outside is not shielded from it."
       ],
       [
        "Find the error. A student places +Q at the centre of the cavity of a neutral conducting shell and says: the conductor shields, so the field outside the shell is zero. The mistake is:",
        [
         "Shielding protects the cavity from outside only; +Q induces −Q on the inner and +Q on the outer surface, so there is a field outside",
         "The shell is neutral, so the induced charges cancel and the field outside is zero after all",
         "The induced charges are +Q on the inner and −Q on the outer surface",
         "The field outside is 2Q/(4πε₀r²), because the induced charge doubles it"
        ],
        0,
        "Shielding does not work the other way round. The outer surface carries +Q, so outside the shell the field is Q/(4πε₀r²)."
       ],
       [
        "A conductor and a dielectric slab are placed separately in the same uniform external field. Which statement is correct?",
        [
         "In both, the induced charges cancel the field inside completely",
         "In the conductor the induced charges cancel the field inside completely; in the dielectric the bound surface charges only reduce it",
         "In the dielectric the induced field exceeds the external field and reverses the net field",
         "The dielectric develops free charges that drift to its surfaces, as in a conductor"
        ],
        1,
        "A dielectric has no free charges. Its induced bound surface charges give an opposing field that is smaller than the external field."
       ],
       [
        "The plates of a parallel plate capacitor carry free charge density ±5 µC m⁻². A dielectric of K = 5 fills the gap. The induced (bound) surface charge density on the dielectric faces is:",
        [
         "1 µC m⁻²",
         "5 µC m⁻²",
         "4 µC m⁻²",
         "25 µC m⁻²"
        ],
        2,
        "σ − σₚ = σ/K, so σₚ = σ(1 − 1/K) = 5 × (1 − 1/5) = 4 µC m⁻².",
        "Use σ − σₚ = σ/K."
       ],
       [
        "A parallel plate air capacitor has plates of area 0.02 m² separated by 2 mm. Air breaks down at 3 × 10⁶ V m⁻¹. The maximum charge it can hold without breakdown is about:",
        [
         "5.3 × 10⁻⁴ C",
         "2.7 × 10⁻⁷ C",
         "1.1 × 10⁻⁶ C",
         "5.3 × 10⁻⁷ C"
        ],
        3,
        "Q = σA = ε₀E_max A = 8.85 × 10⁻¹² × 3 × 10⁶ × 0.02 = 5.3 × 10⁻⁷ C. (Equivalently C = 88.5 pF and V_max = 6000 V.)",
        "Q = CV with the breakdown voltage E × d."
       ],
       [
        "A parallel plate capacitor stays connected to a battery while the plate separation is tripled. Compared with the initial values, the charge Q, the field E between the plates and the stored energy U become:",
        [
         "Q/3, E/3, U/3",
         "Q, E/3, U/3",
         "Q/3, E, U/3",
         "Q/3, E/3, 3U"
        ],
        0,
        "V is fixed and C becomes C/3, so Q = CV becomes Q/3. E = V/d becomes E/3, and U = ½CV² becomes U/3.",
        "The battery keeps V constant."
       ],
       [
        "An air capacitor has C₀ = 6 pF. A dielectric slab of K = 3 with the same area as the plates and thickness d/2 (d is the plate separation) is inserted. The new capacitance is:",
        [
         "18 pF",
         "9 pF",
         "4 pF",
         "12 pF"
        ],
        1,
        "V = E₀(d/2)/K + E₀(d/2) = V₀(K + 1)/(2K) = 2V₀/3 for the same Q, so C = 1.5 C₀ = 9 pF.",
        "Find the new potential difference for the same charge."
       ],
       [
        "A 50 pF air capacitor is connected to a 100 V battery. With the battery still connected, a dielectric of K = 3 fills the gap. The extra charge that flows from the battery is:",
        [
         "5.0 × 10⁻⁹ C",
         "1.5 × 10⁻⁸ C",
         "1.0 × 10⁻⁸ C",
         "3.3 × 10⁻⁹ C"
        ],
        2,
        "Q₀ = CV = 5 × 10⁻⁹ C. Q becomes KCV = 1.5 × 10⁻⁸ C, so ΔQ = (K − 1)CV = 1.0 × 10⁻⁸ C.",
        "Final charge is KCV."
       ],
       [
        "Assertion (A): The dielectric constant of any insulating substance is greater than 1.\nReason (R): The capacitance of a parallel plate capacitor depends on the plate area and the plate separation.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        1,
        "K > 1 because the polarised dielectric opposes the external field and lowers the potential difference. R is a true statement but does not explain why K > 1."
       ],
       [
        "A 4 µF and a 12 µF capacitor are connected in series across a 16 V battery. The potential difference across the 4 µF capacitor is:",
        [
         "4 V",
         "8 V",
         "16 V",
         "12 V"
        ],
        3,
        "C_eq = 3 µF, Q = 3 × 16 = 48 µC on each. V across 4 µF = 48/4 = 12 V.",
        "Series capacitors carry the same charge."
       ],
       [
        "Find the error. A student says: in a series combination of 2 µF and 6 µF capacitors the same voltage appears across each, so the 6 µF capacitor holds three times the charge. The mistake is:",
        [
         "In series the charge is the same on each; the voltages differ, and the smaller capacitance has the larger voltage",
         "The voltages are equal, but the 6 µF capacitor holds one third of the charge",
         "Both the charges and the voltages are equal, since the capacitors are in one circuit",
         "Charges add up in series, so each holds the total charge divided by 8"
        ],
        0,
        "Series capacitors carry the same charge Q, so V = Q/C is larger across the smaller capacitor (three times larger across 2 µF)."
       ],
       [
        "Two 6 µF capacitors in series are connected in parallel with a 4 µF capacitor, and the combination is connected across 60 V. The charge on each 6 µF capacitor is:",
        [
         "360 µC",
         "180 µC",
         "240 µC",
         "90 µC"
        ],
        1,
        "The series pair is 3 µF and sits across the full 60 V, so Q = 3 × 60 = 180 µC on each 6 µF capacitor.",
        "The series branch has C = 3 µF."
       ],
       [
        "A 6 µF capacitor charged to 100 V is disconnected from the supply and connected across an uncharged 4 µF capacitor. The energy lost is:",
        [
         "18 mJ",
         "30 mJ",
         "12 mJ",
         "6 mJ"
        ],
        2,
        "Initial U = ½ × 6 µF × 100² = 30 mJ. Q = 600 µC is shared, V′ = 600/10 = 60 V, final U = ½ × 10 µF × 60² = 18 mJ. Loss = 12 mJ.",
        "Charge is conserved, energy is not."
       ],
       [
        "The electric field in air just before breakdown is 3 × 10⁶ V m⁻¹. The energy stored per unit volume of the field is about:",
        [
         "80 J m⁻³",
         "1.3 × 10⁻⁵ J m⁻³",
         "4.0 × 10² J m⁻³",
         "40 J m⁻³"
        ],
        3,
        "u = ½ε₀E² = 0.5 × 8.85 × 10⁻¹² × (3 × 10⁶)² ≈ 40 J m⁻³.",
        "u = ½ε₀E²."
       ],
       [
        "Assertion (A): When the plates of an isolated charged capacitor are moved apart, the stored energy increases.\nReason (R): The charge stays constant while the capacitance decreases, so U = Q²/2C rises.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Isolated means Q is constant. Pulling the plates apart lowers C, so U = Q²/2C increases; the extra energy comes from the work done in pulling them apart."
       ]
      ]
     ]
    },
    {
     "n": 3,
     "t": "Current Electricity",
     "levels": [
      [
       [
        "The same current flows through two wires of the same material. The second has double the cross-sectional area. Its drift velocity:",
        [
         "Doubles",
         "Halves",
         "Stays the same",
         "Becomes four times"
        ],
        1,
        "I = neAv_d. With I fixed, v_d ∝ 1/A, so doubling A halves v_d."
       ],
       [
        "The resistivity of a conductor depends on:",
        [
         "Length of the wire",
         "Area of cross-section",
         "Material and temperature",
         "Current through it"
        ],
        2,
        "Resistivity is a property of the material and changes with temperature. Resistance depends on the dimensions; resistivity does not."
       ],
       [
        "A wire of resistance R is stretched to twice its length (volume constant). The new resistance is:",
        [
         "2R",
         "R/2",
         "4R",
         "R"
        ],
        2,
        "Doubling l with volume constant halves A, so R = ρl/A becomes ρ(2l)/(A/2) = 4R.",
        "The volume stays the same, so the area changes too."
       ],
       [
        "What is the SI unit of mobility?",
        [
         "m s⁻¹",
         "m² V⁻¹ s⁻¹",
         "V m⁻¹",
         "Ω m"
        ],
        1,
        "Mobility µ = v_d/E, so its unit is (m/s)/(V/m) = m² V⁻¹ s⁻¹."
       ],
       [
        "As temperature increases, the resistivity of a semiconductor:",
        [
         "Increases",
         "Decreases",
         "Stays constant",
         "First increases, then decreases"
        ],
        1,
        "In semiconductors, more charge carriers become available as temperature rises, so resistivity falls (negative temperature coefficient)."
       ],
       [
        "A battery of emf 10 V and internal resistance 3 Ω delivers 0.5 A. What is its terminal voltage?",
        [
         "10 V",
         "11.5 V",
         "8.5 V",
         "7 V"
        ],
        2,
        "V = ε − Ir = 10 − 0.5 × 3 = 8.5 V. (NCERT Exercise 3.2)"
       ],
       [
        "Kirchhoff’s loop rule is based on:",
        [
         "Conservation of charge",
         "Conservation of energy",
         "Conservation of momentum",
         "Ohm’s law"
        ],
        1,
        "The loop rule comes from conservation of energy. The junction rule comes from conservation of charge."
       ],
       [
        "A Wheatstone bridge is balanced with P = 10 Ω, Q = 20 Ω and R = 15 Ω. What is S?",
        [
         "7.5 Ω",
         "15 Ω",
         "30 Ω",
         "45 Ω"
        ],
        2,
        "P/Q = R/S, so 10/20 = 15/S, giving S = 30 Ω. At balance, no current flows through the galvanometer."
       ],
       [
        "Two identical cells (emf ε, internal resistance r) are connected in parallel. The equivalent emf and internal resistance are:",
        [
         "2ε, 2r",
         "2ε, r/2",
         "ε, r/2",
         "ε, 2r"
        ],
        2,
        "For identical cells in parallel, the emf stays ε and the internal resistances combine in parallel to give r/2."
       ],
       [
        "A 100 W and a 60 W bulb, both rated 220 V, are connected in series to 220 V. Which glows brighter?",
        [
         "100 W bulb",
         "60 W bulb",
         "Both equally",
         "Neither glows"
        ],
        1,
        "R = V²/P, so the 60 W bulb has higher resistance. In series the current is the same, so P = I²R is larger for the 60 W bulb.",
        "In series the current is the same, so compare I²R."
       ],
       [
        "Which of the following is an example of a steady flow of charge?",
        [
         "Lightning",
         "A spark when you touch a door handle",
         "The current in a torch run by a cell",
         "Discharge of a charged balloon"
        ],
        2,
        "A cell keeps a steady electric field in the circuit, so charge flows at a constant rate. Lightning is not steady."
       ],
       [
        "A steady current of 3 A flows through a wire for 2 minutes. The charge that passes any cross-section is:",
        [
         "6 C",
         "360 C",
         "180 C",
         "0.025 C"
        ],
        1,
        "q = It = 3 × 120 = 360 C."
       ],
       [
        "When no electric field is applied across a metal, the free electrons:",
        [
         "Move randomly, with the average velocity zero, so there is no net current",
         "Drift towards the positive end",
         "Are at rest",
         "Carry a steady current because of thermal motion"
        ],
        0,
        "Electrons keep moving randomly (thermal motion) but equal numbers go in opposite directions, so the net current is zero."
       ],
       [
        "A current of 2 A flows through a wire of cross-sectional area 4 mm². The current density is:",
        [
         "8 A m⁻²",
         "8 × 10⁻⁶ A m⁻²",
         "0.5 A m⁻²",
         "5 × 10⁵ A m⁻²"
        ],
        3,
        "j = I/A = 2/(4 × 10⁻⁶) = 5 × 10⁵ A m⁻².",
        "Convert mm² to m² first."
       ],
       [
        "In a metal, the average time between successive collisions of an electron (relaxation time) doubles, with n unchanged. The resistivity ρ = m/(ne²τ) becomes:",
        [
         "Twice",
         "Four times",
         "Half",
         "Unchanged"
        ],
        2,
        "ρ is inversely proportional to τ, so doubling τ halves ρ."
       ],
       [
        "Which of the following does NOT obey Ohm’s law?",
        [
         "A copper wire at constant temperature",
         "A p-n junction diode",
         "A nichrome wire at constant temperature",
         "A manganin resistor at constant temperature"
        ],
        1,
        "For a diode, V is not proportional to I and the current depends on the sign of V."
       ],
       [
        "Metals have resistivities typically in the range:",
        [
         "10⁻⁸ Ω m to 10⁻⁶ Ω m",
         "10⁻² Ω m to 10² Ω m",
         "10⁶ Ω m to 10⁸ Ω m",
         "10¹⁸ Ω m or more"
        ],
        0,
        "Metals are the best conductors, with ρ between about 10⁻⁸ and 10⁻⁶ Ω m. Insulators are far higher."
       ],
       [
        "A metal wire has resistance 10 Ω at 0 °C. If α = 4 × 10⁻³ °C⁻¹, its resistance at 100 °C is:",
        [
         "10.4 Ω",
         "40 Ω",
         "4 Ω",
         "14 Ω"
        ],
        3,
        "R = R₀(1 + αΔT) = 10(1 + 4 × 10⁻³ × 100) = 14 Ω."
       ],
       [
        "Manganin and constantan are used to make standard resistors because their resistivity:",
        [
         "Is very high",
         "Is zero at room temperature",
         "Changes very little with temperature",
         "Decreases with temperature"
        ],
        2,
        "These alloys have a very weak temperature dependence, so the resistance stays almost constant."
       ],
       [
        "A 220 V, 100 W bulb has a filament resistance of:",
        [
         "2.2 Ω",
         "484 Ω",
         "22 Ω",
         "48400 Ω"
        ],
        1,
        "R = V²/P = 220²/100 = 484 Ω."
       ],
       [
        "Electrical power is transmitted at very high voltage mainly because:",
        [
         "The power wasted in the cables, P²R/V², is much smaller",
         "It makes the current larger",
         "The cables have lower resistance at high voltage",
         "It increases the power delivered to homes"
        ],
        0,
        "For a given power P, I = P/V is small at high V, so the loss I²R_c is small."
       ],
       [
        "The emf of a cell is equal to the potential difference between its terminals when:",
        [
         "A large current is drawn",
         "The cell is short-circuited",
         "The cell is being charged",
         "No current is drawn from it"
        ],
        3,
        "emf is the open-circuit terminal voltage, when I = 0 and there is no drop Ir."
       ],
       [
        "Two cells of emf 6 V and 4 V are joined in series with their negative terminals connected together. The emf across the free ends is:",
        [
         "10 V",
         "24 V",
         "2 V",
         "5 V"
        ],
        2,
        "With opposition, ε_eq = ε₁ − ε₂ = 6 − 4 = 2 V."
       ],
       [
        "At a junction, currents of 3 A and 2 A enter and a current of 4 A leaves along one wire. The current in the remaining wire leaving the junction is:",
        [
         "5 A",
         "1 A",
         "9 A",
         "0 A"
        ],
        1,
        "By the junction rule, 3 + 2 = 4 + I, so I = 1 A leaving."
       ]
      ],
      [
       [
        "A lightning flash carries 30 C in 3 ms, while a torch draws a steady 0.5 A from a cell. Which statement is correct?",
        [
         "Lightning has an average current of 10⁴ A and is as steady as the torch current",
         "Lightning has an average current of 10⁴ A and the flow is not steady, unlike the torch",
         "Lightning has an average current of 10² A and is not steady",
         "Lightning has an average current of 10⁷ A and is steady"
        ],
        1,
        "I = q/t = 30/(3 × 10⁻³) = 10⁴ A. The flow in lightning is not steady, while a cell maintains a steady current in a torch."
       ],
       [
        "In a gas discharge tube, 2 × 10¹⁸ electrons move towards the anode and 1 × 10¹⁸ singly charged positive ions move towards the cathode every second. The current in the tube is:",
        [
         "0.48 A",
         "0.32 A",
         "0.16 A",
         "0.96 A"
        ],
        0,
        "Both flows add to the current: I = (2 + 1) × 10¹⁸ × 1.6 × 10⁻¹⁹ = 0.48 A.",
        "Opposite charges moving in opposite directions both contribute in the same sense."
       ],
       [
        "Assertion (A): When charges +Q and −Q are placed on discs at the ends of a metal cylinder, the current stops after a very short while.\nReason (R): The electrons move to neutralise the charges, so the electric field inside the conductor disappears.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Without a source to replenish the charges, the field dies out and the current stops. A cell or battery is needed to maintain a steady field."
       ],
       [
        "A copper wire of diameter 1 mm carries 3 A. If ρ for copper is 1.7 × 10⁻⁸ Ω m, the electric field inside the wire is nearly:",
        [
         "6.5 × 10⁻⁵ V m⁻¹",
         "1.6 × 10⁻² V m⁻¹",
         "6.5 × 10⁻² V m⁻¹",
         "3.8 × 10⁶ V m⁻¹"
        ],
        2,
        "j = I/A = 3/(π × 0.25 × 10⁻⁶) = 3.8 × 10⁶ A m⁻², so E = ρj = 1.7 × 10⁻⁸ × 3.8 × 10⁶ ≈ 6.5 × 10⁻² V m⁻¹.",
        "Use the radius, not the diameter, in A = πr²."
       ],
       [
        "A student argues: “If both the length and the radius of a wire are doubled, the resistance doubles, because R ∝ l.” What is wrong with this?",
        [
         "Nothing, the resistance doubles",
         "Area also changes: A becomes 4 times, so R becomes R/2",
         "Resistivity also doubles, so R becomes 4R",
         "Area becomes 2 times, so R stays the same"
        ],
        1,
        "R = ρl/A. Doubling l doubles R, but doubling the radius makes A four times, so R′ = R × 2/4 = R/2."
       ],
       [
        "For copper, ρ = 1.7 × 10⁻⁸ Ω m and n = 8.5 × 10²⁸ m⁻³. The relaxation time of its conduction electrons is about:",
        [
         "2.5 × 10⁻¹⁴ s",
         "2.5 × 10⁻¹⁰ s",
         "4 × 10⁻¹⁴ s",
         "2.5 × 10⁻¹⁷ s"
        ],
        0,
        "τ = m/(ρne²) = 9.1 × 10⁻³¹ / (1.7 × 10⁻⁸ × 8.5 × 10²⁸ × (1.6 × 10⁻¹⁹)²) ≈ 2.5 × 10⁻¹⁴ s.",
        "Use ρ = m/(ne²τ)."
       ],
       [
        "Assertion (A): Under a steady electric field, the free electrons in a metal move with a constant average drift velocity.\nReason (R): The electric field does not accelerate the electrons in a metal.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "A is true: collisions limit the average velocity to v_d = eEτ/m. R is false: electrons are accelerated between collisions, but they lose their drift velocity at each collision."
       ],
       [
        "The relaxation time of electrons in a wire is 2 × 10⁻¹⁴ s. A potential difference of 4 V is applied across a 2 m length of the wire. The drift speed is about:",
        [
         "3.5 × 10⁻³ m s⁻¹",
         "1.4 × 10⁻² m s⁻¹",
         "7.0 × 10⁻³ m s⁻¹",
         "7.0 × 10⁻⁵ m s⁻¹"
        ],
        2,
        "E = V/l = 2 V m⁻¹, so v_d = eEτ/m = 1.6 × 10⁻¹⁹ × 2 × 2 × 10⁻¹⁴ / 9.1 × 10⁻³¹ ≈ 7.0 × 10⁻³ m s⁻¹.",
        "Find E first, then use v_d = eEτ/m."
       ],
       [
        "A student says: “A diode does not obey Ohm’s law, so V = IR cannot be used for it and its resistance is undefined.” What is the error?",
        [
         "No error, R is defined only for ohmic materials",
         "V = IR defines resistance for any device; Ohm’s law says R is independent of V",
         "A diode obeys Ohm’s law in one direction, so R is constant",
         "A diode has zero resistance, so V = IR gives V = 0"
        ],
        1,
        "V = IR is the definition of resistance and applies to every conductor. Ohm’s law is the statement that the I–V graph is linear, i.e. R does not depend on V."
       ],
       [
        "Sample X has ρ = 5 × 10⁻⁸ Ω m at 300 K and its resistance rises on heating. Sample Y has a much larger ρ, which falls on heating and drops sharply when a trace of impurity is added. The most likely classification is:",
        [
         "X is a metal and Y is a semiconductor",
         "X is a semiconductor and Y is a metal",
         "X is a metal and Y is an insulator",
         "Both are metals"
        ],
        0,
        "Low ρ with a positive temperature coefficient is a metal. A middle-range ρ that falls with temperature and with doping is a semiconductor."
       ],
       [
        "The resistance of a heating element at 27 °C is 40 Ω. Connected to 210 V, it settles at a steady current of 5 A. If α = 1.5 × 10⁻⁴ °C⁻¹, the steady temperature is about:",
        [
         "333 °C",
         "840 °C",
         "306 °C",
         "360 °C"
        ],
        3,
        "R₂ = 210/5 = 42 Ω. ΔT = (R₂ − R₁)/(R₁α) = 2/(40 × 1.5 × 10⁻⁴) ≈ 333 °C, so T₂ ≈ 27 + 333 = 360 °C.",
        "T₂ = T₁ + ΔT."
       ],
       [
        "A student writes: “In a metal, resistivity increases with temperature because the number of free electrons n increases.” What is the correct reason?",
        [
         "Nothing is wrong",
         "n decreases with temperature",
         "n is nearly constant; the collision time τ decreases, so ρ = m/(ne²τ) increases",
         "The charge e of each electron decreases"
        ],
        2,
        "In a metal, n barely changes. Hotter ions mean more frequent collisions, so τ falls and ρ rises."
       ],
       [
        "Power of 100 kW is delivered through cables of total resistance 5 Ω. The cable loss is changed by sending the power at 20 kV instead of 2 kV. The loss goes from:",
        [
         "12.5 kW to 1.25 kW",
         "12.5 kW to 125 W",
         "25 kW to 250 W",
         "1.25 kW to 12.5 W"
        ],
        1,
        "Loss = (P/V)²R_c. At 2 kV, I = 50 A and loss = 12.5 kW. At 20 kV, I = 5 A and loss = 125 W (a 100-fold fall).",
        "Loss ∝ 1/V²."
       ],
       [
        "A heater coil of resistance R is cut so that 3/4 of its length is used, and connected across the same supply. The heat produced per second becomes:",
        [
         "4/3 times",
         "3/4 times",
         "16/9 times",
         "9/16 times"
        ],
        0,
        "R′ = (3/4)R, and P = V²/R, so P′ = V²/(3R/4) = 4P/3."
       ],
       [
        "A cell sends a current of 2 A through an external resistance of 2 Ω, and 1 A when the resistance is 5 Ω. The emf and internal resistance of the cell are:",
        [
         "4 V, 1 Ω",
         "5 V, 0.5 Ω",
         "6 V, 2 Ω",
         "6 V, 1 Ω"
        ],
        3,
        "ε = 2(2 + r) = 1(5 + r), so r = 1 Ω and ε = 6 V."
       ],
       [
        "Assertion (A): The terminal voltage of a battery is always less than its emf.\nReason (R): When a current I flows out of the positive terminal, the terminal voltage is V = ε − Ir.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "R is true, but A is false: while a battery is being charged, current enters the positive terminal and V = ε + Ir exceeds ε."
       ],
       [
        "Two cells, ε₁ = 12 V, r₁ = 2 Ω and ε₂ = 6 V, r₂ = 1 Ω, are connected in parallel (positives together, negatives together). This combination is connected across a 2 Ω resistor. The current through the resistor is:",
        [
         "4.5 A",
         "3 A",
         "2.25 A",
         "2 A"
        ],
        1,
        "ε_eq = (ε₁r₂ + ε₂r₁)/(r₁ + r₂) = 8 V and r_eq = r₁r₂/(r₁ + r₂) = 2/3 Ω. I = 8/(2 + 2/3) = 3 A.",
        "Replace the pair by one equivalent cell first."
       ],
       [
        "A student joins three identical cells (ε, r) in series but connects one of them reversed. She claims: “emf = 3ε and internal resistance = 3r.” The correct values are:",
        [
         "ε and 3r",
         "3ε and r",
         "ε and r",
         "3ε and 3r"
        ],
        0,
        "The reversed cell enters with a negative sign: ε_eq = ε + ε − ε = ε. The internal resistances still add: 3r."
       ],
       [
        "In a circuit, a 10 V cell with a 2 Ω resistor in one branch and a 9 V cell with a 3 Ω resistor in a second branch both feed a common 2 Ω resistor (cell resistances negligible). The branch currents are 2 A and 1 A. The power dissipated in the common resistor is:",
        [
         "4.5 W",
         "8 W",
         "2 W",
         "18 W"
        ],
        3,
        "By the junction rule the common resistor carries 2 + 1 = 3 A. Check with the loop rule: 10 − 2(2) − 2(3) = 0. Then P = I²R = 9 × 2 = 18 W."
       ],
       [
        "Assertion (A): Kirchhoff’s junction rule remains valid even if the wires meeting at a junction are bent or reoriented.\nReason (R): Kirchhoff’s loop rule is based on conservation of energy.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        1,
        "A is true because the junction rule only compares total current in and out (conservation of charge). R is also true, but it concerns the loop rule and does not explain A."
       ],
       [
        "In a Wheatstone bridge, AB = 6 Ω, BC = 12 Ω, AD = 4 Ω and DC = 8 Ω. A 9 V cell of negligible resistance is connected across AC, with a galvanometer across BD. The current drawn from the cell is:",
        [
         "0.5 A",
         "1.25 A",
         "0.75 A",
         "2.5 A"
        ],
        1,
        "6/12 = 4/8, so the bridge is balanced and the galvanometer carries no current. The two arms (18 Ω and 12 Ω) are in parallel: I = 9/18 + 9/12 = 1.25 A."
       ],
       [
        "A Wheatstone bridge is balanced with the battery across AC and the galvanometer across BD. If the battery and the galvanometer are now interchanged, the galvanometer current will:",
        [
         "Remain zero",
         "Become non-zero",
         "Become infinite",
         "Reverse its direction but stay non-zero"
        ],
        0,
        "The balance condition P/Q = R/S (that is, PS = QR) is symmetrical, so the bridge stays balanced after interchanging."
       ]
      ]
     ]
    },
    {
     "n": 4,
     "t": "Moving Charges and Magnetism",
     "levels": [
      [
       [
        "A charge q moves with velocity v parallel to a magnetic field B. The magnetic force on it is:",
        [
         "qvB",
         "qvB/2",
         "Zero",
         "Maximum"
        ],
        2,
        "F = qvB sin θ, and θ = 0° when moving parallel to B, so F = 0."
       ],
       [
        "A charged particle moves in a circle perpendicular to a uniform magnetic field. If its speed is doubled, its time period:",
        [
         "Doubles",
         "Halves",
         "Stays the same",
         "Becomes four times"
        ],
        2,
        "T = 2πm/qB, which does not depend on speed. A faster particle moves in a bigger circle but takes the same time per revolution."
       ],
       [
        "A circular coil of 100 turns and radius 8 cm carries 0.4 A. What is the field at its centre?",
        [
         "1.6 × 10⁻⁴ T",
         "3.1 × 10⁻⁴ T",
         "6.3 × 10⁻⁴ T",
         "3.1 × 10⁻⁶ T"
        ],
        1,
        "B = µ₀NI/2R = (4π × 10⁻⁷ × 100 × 0.4)/(2 × 0.08) ≈ 3.1 × 10⁻⁴ T. (NCERT Exercise 4.1)",
        "Use B = µ₀NI/2R."
       ],
       [
        "A long straight wire carries 35 A. What is the magnetic field 20 cm from it?",
        [
         "3.5 × 10⁻⁵ T",
         "7.0 × 10⁻⁵ T",
         "1.75 × 10⁻⁵ T",
         "3.5 × 10⁻⁷ T"
        ],
        0,
        "B = µ₀I/2πr = 2 × 10⁻⁷ × 35/0.2 = 3.5 × 10⁻⁵ T. (NCERT Exercise 4.2)"
       ],
       [
        "Two long parallel wires carry currents in the SAME direction. They:",
        [
         "Attract each other",
         "Repel each other",
         "Exert no force",
         "Exert only a torque"
        ],
        0,
        "Parallel currents attract and antiparallel currents repel, the opposite of the rule for like electric charges."
       ],
       [
        "The magnetic field inside a long solenoid with n turns per unit length carrying current I is:",
        [
         "µ₀I/2πr",
         "µ₀NI/2R",
         "µ₀nI",
         "Zero"
        ],
        2,
        "B = µ₀nI. It is uniform inside the solenoid and nearly zero outside."
       ],
       [
        "The torque on a current loop in a uniform magnetic field is maximum when the PLANE of the loop is:",
        [
         "Perpendicular to the field",
         "Parallel to the field",
         "At 45° to the field",
         "The torque is always the same"
        ],
        1,
        "τ = NIAB sin θ, with θ between the area vector and B. It is maximum at θ = 90°, when the PLANE of the coil is parallel to B.",
        "The angle in the formula is between the area vector (normal to the coil) and B."
       ],
       [
        "To convert a galvanometer into an ammeter, you connect:",
        [
         "A high resistance in series",
         "A low resistance in parallel",
         "A high resistance in parallel",
         "A low resistance in series"
        ],
        1,
        "A small shunt in parallel carries most of the current and keeps the ammeter’s resistance low."
       ],
       [
        "To convert a galvanometer into a voltmeter, you connect:",
        [
         "A high resistance in series",
         "A low resistance in parallel",
         "A high resistance in parallel",
         "A low resistance in series"
        ],
        0,
        "A large series resistance limits the current, so the voltmeter draws very little current from the circuit."
       ],
       [
        "When a charged particle moves through a magnetic field (no electric field), its kinetic energy:",
        [
         "Increases",
         "Stays the same",
         "Decreases",
         "Depends on the charge"
        ],
        1,
        "The magnetic force is always perpendicular to the velocity, so it does no work. Only the direction changes."
       ],
       [
        "Oersted noticed a compass needle deflect when placed near a wire carrying current. What did he conclude?",
        [
         "Moving charges or currents produce a magnetic field around them",
         "A stationary charge produces a magnetic field",
         "A magnet produces an electric current in the wire",
         "The wire becomes a permanent magnet"
        ],
        0,
        "The needle aligned tangentially to circles around the wire, showing that currents set up a magnetic field in the surrounding space."
       ],
       [
        "The magnetic field at a point due to several current-carrying wires is found by:",
        [
         "Adding their magnitudes only",
         "Adding the individual fields vectorially",
         "Taking the largest of the individual fields",
         "Multiplying the individual fields"
        ],
        1,
        "Magnetic fields obey the principle of superposition: the net field is the vector sum of the fields of the individual sources."
       ],
       [
        "The Earth’s magnetic field is about 3.6 × 10⁻⁵ T. In gauss (1 G = 10⁻⁴ T) this is:",
        [
         "3.6 G",
         "36 G",
         "0.36 G",
         "0.036 G"
        ],
        2,
        "3.6 × 10⁻⁵ T ÷ 10⁻⁴ T per gauss = 0.36 G. The tesla is a large unit; the gauss is the smaller one."
       ],
       [
        "What is the magnetic force per unit length on a wire carrying 8 A at 30° to a uniform field of 0.15 T?",
        [
         "1.2 N m⁻¹",
         "1.04 N m⁻¹",
         "0.15 N m⁻¹",
         "0.6 N m⁻¹"
        ],
        3,
        "F/l = IB sin θ = 8 × 0.15 × sin 30° = 0.6 N m⁻¹."
       ],
       [
        "What is the magnitude of dB at a point 0.1 m from a current element of 5 A and length 2 cm, if the point is on the line perpendicular to the element?",
        [
         "1 × 10⁻⁷ T",
         "1 × 10⁻⁶ T",
         "4π × 10⁻⁷ T",
         "0"
        ],
        1,
        "dB = (µ₀/4π) I dl sin θ / r² = 10⁻⁷ × 5 × 0.02 × 1/(0.1)² = 1 × 10⁻⁶ T.",
        "Use µ₀/4π = 10⁻⁷ T m A⁻¹ and θ = 90°."
       ],
       [
        "According to the Biot–Savart law, the field dB due to a current element is zero at a point:",
        [
         "Exactly perpendicular to the element",
         "Very close to the element",
         "Along the line of the element itself",
         "Very far from the element on a perpendicular line"
        ],
        2,
        "dB ∝ sin θ, and θ = 0° for any point on the line along dl, so dB = 0 there."
       ],
       [
        "A planar loop of area 0.0025 m² carries 2 A. Its magnetic moment is:",
        [
         "5 × 10⁻³ A m²",
         "5 × 10⁻³ T",
         "1.25 × 10⁻³ A m²",
         "5 A m²"
        ],
        0,
        "m = IA = 2 × 0.0025 = 5 × 10⁻³ A m². The unit of magnetic moment is A m².",
        "m = IA."
       ],
       [
        "The magnetic field lines due to a long straight current-carrying wire are:",
        [
         "Straight lines parallel to the wire",
         "Straight lines radiating from the wire",
         "Circles that begin and end on the wire",
         "Closed concentric circles around the wire"
        ],
        3,
        "By Ampère’s law B is tangential and has the same magnitude on a circle around the wire. Magnetic field lines always form closed loops."
       ]
      ],
      [
       [
        "A compass needle lies directly above a long horizontal wire that carries a large current towards the north. Ignoring the Earth’s field, the north pole of the needle points towards:",
        [
         "East",
         "West",
         "North",
         "South"
        ],
        0,
        "For current towards north, the right-hand thumb rule gives B above the wire pointing east (I × r̂ = north × up = east).",
        "Thumb along the current, fingers curl in the direction of B."
       ],
       [
        "Which statement about the fields of a point charge is correct?",
        [
         "A charge at rest produces both E and B",
         "A moving charge produces a magnetic field in addition to its electric field",
         "A moving charge produces only a magnetic field",
         "A moving charge has no electric field because it is moving"
        ],
        1,
        "Static charges give an electric field; moving charges (currents) give a magnetic field as well, and the fields add vectorially."
       ],
       [
        "An electron passes undeflected through perpendicular uniform fields E = 3 × 10⁴ V m⁻¹ and B = 0.2 T. What is its speed?",
        [
         "6.0 × 10³ m s⁻¹",
         "7.5 × 10⁴ m s⁻¹",
         "1.5 × 10⁵ m s⁻¹",
         "3.0 × 10⁵ m s⁻¹"
        ],
        2,
        "For zero net Lorentz force, qE = qvB, so v = E/B = 3 × 10⁴/0.2 = 1.5 × 10⁵ m s⁻¹.",
        "Set the electric and magnetic forces equal."
       ],
       [
        "A student writes: “B is along +y and an electron moves along +x, so v × B is along +z and the electron is pushed along +z.” What is wrong?",
        [
         "v × B should be along −z",
         "The force on an electron is zero",
         "The force is along +y",
         "The electron is negative, so the force is along −z"
        ],
        3,
        "x̂ × ŷ = ẑ, so a proton is pushed along +z, but for an electron the force q(v × B) reverses to −z. (NCERT Example 4.2)"
       ],
       [
        "A straight wire of mass 40 g and length 0.5 m hangs in a horizontal field B = 0.4 T perpendicular to it. What current keeps it suspended in mid-air? (g = 9.8 m s⁻²)",
        [
         "0.98 A",
         "1.96 A",
         "3.92 A",
         "0.196 A"
        ],
        1,
        "IlB = mg, so I = mg/(lB) = 0.04 × 9.8/(0.5 × 0.4) = 1.96 A.",
        "Magnetic force upward balances the weight."
       ],
       [
        "Assertion (A): A straight wire carrying current along the direction of a uniform magnetic field experiences no magnetic force.\nReason (R): The force on a current-carrying wire is F = I l × B, which is zero when l is parallel to B.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "The cross product vanishes for parallel vectors, and this directly explains why there is no force."
       ],
       [
        "An electron enters a uniform field B = 2 × 10⁻³ T with speed 4 × 10⁶ m s⁻¹ at 30° to B. What is the pitch of its helical path? (e = 1.6 × 10⁻¹⁹ C, mₑ = 9.1 × 10⁻³¹ kg)",
        [
         "3.6 cm",
         "5.7 mm",
         "6.2 cm",
         "7.1 cm"
        ],
        2,
        "Pitch = 2πm v cos 30°/(eB) = 2π × 9.1 × 10⁻³¹ × 3.46 × 10⁶/(1.6 × 10⁻¹⁹ × 2 × 10⁻³) ≈ 6.2 cm.",
        "Only the component of v along B moves the particle along the field."
       ],
       [
        "A proton and an α-particle (mass 4 times, charge 2 times) have the same kinetic energy and enter the same uniform field perpendicular to it. The ratio of their radii r(α) : r(p) is:",
        [
         "2 : 1",
         "1 : 2",
         "√2 : 1",
         "1 : 1"
        ],
        3,
        "r = mv/qB = √(2mK)/(qB). The ratio is √4/2 = 1, so the radii are equal.",
        "Write r in terms of kinetic energy K."
       ],
       [
        "A student claims: “The Biot–Savart field of a current element at a point on the extended line of the element is µ₀Idl/4πr².” What is wrong?",
        [
         "The field there is zero because sin θ = 0",
         "The field is infinite because θ = 0",
         "The field should be µ₀Idl/2πr",
         "The field is maximum there and the r² should be r"
        ],
        0,
        "dB = (µ₀/4π) I dl sin θ/r², and θ = 0° along the line of the element, so dB = 0."
       ],
       [
        "The product µ₀ε₀ has the dimensions of:",
        [
         "Length/time",
         "(Time/length)², i.e. L⁻²T²",
         "L²T⁻²",
         "Dimensionless"
        ],
        1,
        "µ₀ε₀ = 1/c², and c has dimensions LT⁻¹, so µ₀ε₀ has dimensions L⁻²T²."
       ],
       [
        "A circular coil of radius 3 cm carries 4 A. What is the field on its axis at 4 cm from the centre?",
        [
         "8.4 × 10⁻⁵ T",
         "3.6 × 10⁻⁵ T",
         "4.5 × 10⁻⁶ T",
         "1.8 × 10⁻⁵ T"
        ],
        3,
        "B = µ₀IR²/[2(x² + R²)^(3/2)] = 4π × 10⁻⁷ × 4 × 9 × 10⁻⁴/[2 × (5 × 10⁻²)³] ≈ 1.8 × 10⁻⁵ T.",
        "x² + R² = (5 cm)²."
       ],
       [
        "A wire carrying 5 A has two straight radial segments joined by a quarter-circular arc of radius 10 cm. What is the field at the centre of the arc?",
        [
         "7.9 × 10⁻⁶ T",
         "1.6 × 10⁻⁵ T",
         "3.1 × 10⁻⁵ T",
         "3.9 × 10⁻⁶ T"
        ],
        0,
        "Straight radial segments give zero (dl × r = 0). The quarter arc gives (1/4) × µ₀I/2R = µ₀I/8R = 4π × 10⁻⁷ × 5/0.8 ≈ 7.9 × 10⁻⁶ T."
       ],
       [
        "Two long parallel wires 10 cm apart carry 5 A and 3 A in opposite directions. What is the field at the midpoint between them?",
        [
         "8.0 × 10⁻⁶ T",
         "1.6 × 10⁻⁵ T",
         "3.2 × 10⁻⁵ T",
         "6.4 × 10⁻⁵ T"
        ],
        2,
        "Between antiparallel currents the two fields point the same way: B = (µ₀/2π)(5 + 3)/0.05 = 2 × 10⁻⁷ × 8/0.05 = 3.2 × 10⁻⁵ T.",
        "Use the right-hand rule to decide whether the fields add or subtract."
       ],
       [
        "Assertion (A): Ampère’s circuital law can be used directly to get the field at the centre of a circular current loop.\nReason (R): Ampère’s law holds for any closed loop carrying a steady current.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "R is true, but the circular loop lacks the symmetry that makes B constant and tangential on an Amperian loop, so the law gives no simple result there; A is false."
       ],
       [
        "A long straight wire of radius a carries a current I spread uniformly over its cross-section. The ratio of the field at r = a/2 to the field at r = 2a is:",
        [
         "2",
         "1",
         "1/2",
         "4"
        ],
        1,
        "Inside, B = µ₀Ir/2πa² = µ₀I/4πa at r = a/2. Outside, B = µ₀I/2πr = µ₀I/4πa at r = 2a. The two are equal."
       ],
       [
        "A solenoid is 50 cm long and has 4 layers of 300 turns each. It carries 5 A. What is the field inside near its centre?",
        [
         "1.5 × 10⁻² T",
         "7.5 × 10⁻³ T",
         "3.8 × 10⁻³ T",
         "3.0 × 10⁻² T"
        ],
        0,
        "n = 4 × 300/0.5 = 2400 turns per metre, so B = µ₀nI = 4π × 10⁻⁷ × 2400 × 5 ≈ 1.5 × 10⁻² T.",
        "Count the turns of all the layers."
       ],
       [
        "A long solenoid with a fixed number of turns carries a fixed current. If it is stretched to twice its length, the field inside becomes:",
        [
         "Double",
         "Unchanged",
         "One-fourth",
         "Half"
        ],
        3,
        "B = µ₀nI, and n = N/L halves when L doubles, so B halves."
       ],
       [
        "A student says: “Wire X carries 20 A and wire Y carries 10 A, parallel and close, so X pulls Y twice as hard as Y pulls X.” What is wrong?",
        [
         "Y pulls X twice as hard",
         "The forces are equal and opposite, as Newton’s third law requires",
         "The wires repel, not attract",
         "There is no force because the currents differ"
        ],
        1,
        "Force per unit length is µ₀I₁I₂/2πd for both wires. Same-direction currents attract, and F(ba) = −F(ab)."
       ],
       [
        "Two long parallel wires carry the same current. If both currents are doubled and the separation is also doubled, the force per unit length becomes:",
        [
         "4 times",
         "Unchanged",
         "2 times",
         "8 times"
        ],
        2,
        "f = µ₀I₁I₂/2πd ∝ I²/d, so the change is 4/2 = 2 times.",
        "f is proportional to I₁I₂/d."
       ],
       [
        "A coil of 50 turns, 4 cm × 5 cm, carries 2 A. Its plane makes 30° with a uniform field of 0.5 T. What is the torque on it?",
        [
         "8.7 × 10⁻² N m",
         "5.0 × 10⁻² N m",
         "1.0 × 10⁻¹ N m",
         "4.3 × 10⁻² N m"
        ],
        0,
        "The angle between the normal and B is 60°. τ = NIAB sin 60° = 50 × 2 × 2 × 10⁻³ × 0.5 × 0.866 ≈ 8.7 × 10⁻² N m.",
        "θ in τ = NIAB sin θ is measured from the normal to the plane."
       ],
       [
        "Assertion (A): When the magnetic moment of a current loop is parallel to the external field, the loop is in stable equilibrium.\nReason (R): The torque on a current loop is zero when its magnetic moment is parallel or antiparallel to the field.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        1,
        "Both are true, but zero torque also occurs at the unstable antiparallel position, so R alone does not explain the stability; stability follows from the restoring torque after a small rotation."
       ],
       [
        "A small loop has magnetic moment 0.5 A m². What is the field on its axis at 0.5 m from its centre?",
        [
         "4 × 10⁻⁷ T",
         "8 × 10⁻⁷ T",
         "1.6 × 10⁻⁶ T",
         "2 × 10⁻⁷ T"
        ],
        1,
        "For x much greater than R, B = (µ₀/4π)(2m/x³) = 10⁻⁷ × 2 × 0.5/0.125 = 8 × 10⁻⁷ T."
       ],
       [
        "At the same large distance from a small current loop, the field on its axis is how many times the field in the plane of the loop?",
        [
         "1/2",
         "1",
         "2",
         "4"
        ],
        2,
        "On the axis B = (µ₀/4π)(2m/x³), and in the equatorial plane B = (µ₀/4π)(m/x³), the same as the electric dipole results."
       ],
       [
        "A galvanometer of resistance 50 Ω gives full-scale deflection at 5 mA. What shunt converts it into a 0–1 A ammeter?",
        [
         "2.5 Ω",
         "0.05 Ω",
         "50 Ω",
         "0.25 Ω"
        ],
        3,
        "I_g × G = (I − I_g) × r_s, so r_s = 0.005 × 50/0.995 ≈ 0.25 Ω.",
        "Voltage across the galvanometer and the shunt is the same."
       ],
       [
        "The number of turns of a moving-coil galvanometer is doubled, and its coil resistance also doubles. Its current sensitivity and voltage sensitivity become:",
        [
         "Current sensitivity doubles; voltage sensitivity is unchanged",
         "Both double",
         "Both stay unchanged",
         "Current sensitivity is unchanged; voltage sensitivity doubles"
        ],
        0,
        "Current sensitivity NAB/k ∝ N doubles. Voltage sensitivity ∝ N/R is unchanged because R also doubles."
       ]
      ]
     ]
    },
    {
     "n": 5,
     "t": "Magnetism and Matter",
     "levels": [
      [
       [
        "A bar magnet is cut into two pieces along its length. You get:",
        [
         "One piece with only N, the other only S",
         "Two magnets, each with N and S",
         "The magnetism is destroyed",
         "Only one piece remains a magnet"
        ],
        1,
        "Magnetic monopoles do not exist. Each piece is a complete magnet with a north and a south pole."
       ],
       [
        "The net magnetic flux through any closed surface is zero because:",
        [
         "Magnetic fields are weak",
         "Field lines cross each other",
         "Magnetic monopoles do not exist",
         "The surface is a conductor"
        ],
        2,
        "Magnetic field lines form closed loops because there are no isolated poles, so as many lines enter a closed surface as leave it."
       ],
       [
        "A bar magnet at 30° to a 0.25 T field experiences a torque of 4.5 × 10⁻² J. What is its magnetic moment?",
        [
         "0.18 J T⁻¹",
         "0.36 J T⁻¹",
         "0.72 J T⁻¹",
         "1.8 J T⁻¹"
        ],
        1,
        "τ = mB sin θ, so m = 4.5 × 10⁻²/(0.25 × 0.5) = 0.36 J T⁻¹. (NCERT Exercise 5.1)"
       ],
       [
        "A magnet with m = 0.32 J T⁻¹ is in a 0.15 T field. What is its potential energy in STABLE equilibrium?",
        [
         "−0.048 J",
         "+0.048 J",
         "Zero",
         "−0.024 J"
        ],
        0,
        "U = −mB cos θ. Stable equilibrium is at θ = 0°, so U = −0.048 J. At 180° (unstable) it is +0.048 J."
       ],
       [
        "For a diamagnetic substance, the magnetic susceptibility χ is:",
        [
         "Large and positive",
         "Small and positive",
         "Small and negative",
         "Zero"
        ],
        2,
        "Diamagnetic materials (bismuth, copper, water) have small negative χ and move from stronger to weaker parts of a field."
       ],
       [
        "A superconductor is a perfect diamagnet. For it:",
        [
         "χ = 0, µᵣ = 1",
         "χ = −1, µᵣ = 0",
         "χ = 1, µᵣ = 2",
         "χ = −1, µᵣ = 1"
        ],
        1,
        "A superconductor expels the magnetic field completely (Meissner effect): χ = −1 and µᵣ = 0."
       ],
       [
        "A material has susceptibility χ = 399. What is its relative permeability µᵣ?",
        [
         "399",
         "400",
         "398",
         "1/399"
        ],
        1,
        "µᵣ = 1 + χ = 1 + 399 = 400."
       ],
       [
        "For a paramagnetic material, as the temperature is LOWERED, its magnetisation:",
        [
         "Decreases",
         "Increases",
         "Stays the same",
         "Becomes negative"
        ],
        1,
        "Lower temperature means less random thermal motion, so more atomic dipoles line up with the field."
       ],
       [
        "Which material is best for making a permanent magnet?",
        [
         "Soft iron",
         "Copper",
         "Alnico",
         "Aluminium"
        ],
        2,
        "Alnico is a hard ferromagnet: it keeps its magnetisation. Soft iron loses it, so it is used in electromagnets."
       ],
       [
        "A short bar magnet has m = 0.48 J T⁻¹. What is the field on its AXIS, 10 cm from its centre?",
        [
         "0.48 × 10⁻⁴ T",
         "4.8 × 10⁻⁴ T",
         "0.96 × 10⁻⁴ T",
         "1.92 × 10⁻⁴ T"
        ],
        2,
        "B = (µ₀/4π)(2m/r³) = 10⁻⁷ × 2 × 0.48/(0.1)³ = 0.96 × 10⁻⁴ T, along the magnet’s moment. (NCERT Exercise 5.7)",
        "Axial field: B = (µ₀/4π)(2m/r³)."
       ],
       [
        "Iron filings sprinkled on a glass sheet over a short bar magnet form a pattern. This suggests that the bar magnet behaves like:",
        [
         "A single magnetic monopole",
         "A magnetic dipole with a north and a south pole",
         "A point electric charge",
         "A source of a uniform magnetic field"
        ],
        1,
        "The filing pattern resembles the field of a dipole (and of a current-carrying solenoid), so the magnet has two poles and acts as a magnetic dipole."
       ],
       [
        "Which of these is NOT a property of magnetic field lines?",
        [
         "They form continuous closed loops",
         "The tangent at a point gives the direction of B",
         "Two field lines never intersect",
         "They begin at the north pole and end at the south pole"
        ],
        3,
        "Field lines are closed loops: outside the magnet they go from N to S, but they continue inside the magnet from S to N, so they do not begin or end anywhere."
       ],
       [
        "A closely wound solenoid has 800 turns, cross-section 2.5 × 10⁻⁴ m² and carries 3.0 A. What is its magnetic moment (it acts like a bar magnet)?",
        [
         "0.06 J T⁻¹",
         "0.2 J T⁻¹",
         "0.6 J T⁻¹",
         "6.0 J T⁻¹"
        ],
        2,
        "m = NIA = 800 × 3.0 × 2.5 × 10⁻⁴ = 0.6 J T⁻¹, along the axis. (NCERT Exercise 5.3)",
        "Moment of a coil: m = NIA."
       ],
       [
        "A short bar magnet has m = 0.48 J T⁻¹. What is the field on its EQUATORIAL line, 10 cm from its centre?",
        [
         "4.8 × 10⁻⁵ T, along m",
         "4.8 × 10⁻⁵ T, opposite to m",
         "9.6 × 10⁻⁵ T, opposite to m",
         "9.6 × 10⁻⁵ T, along m"
        ],
        1,
        "B = (µ₀/4π)(m/r³) = 10⁻⁷ × 0.48/(0.1)³ = 4.8 × 10⁻⁵ T, directed opposite to m on the equator. (NCERT Exercise 5.7)",
        "Equatorial field is half the axial value."
       ],
       [
        "A long solenoid has n = 500 turns per metre and carries 3 A. Its core has µᵣ = 100. What is the magnetic intensity H in the core?",
        [
         "15 A m⁻¹",
         "150 A m⁻¹",
         "1.5 × 10⁵ A m⁻¹",
         "1.5 × 10³ A m⁻¹"
        ],
        3,
        "H = nI = 500 × 3 = 1.5 × 10³ A m⁻¹. H depends only on the current, not on the core material.",
        "H = nI."
       ],
       [
        "A substance has relative permeability µᵣ = 0.99998. It is:",
        [
         "Paramagnetic",
         "Diamagnetic",
         "Ferromagnetic",
         "A superconductor"
        ],
        1,
        "µᵣ slightly less than 1 means χ is small and negative, so the substance is diamagnetic. A superconductor has µᵣ = 0."
       ],
       [
        "When an external field is applied to an unmagnetised ferromagnet, the domains:",
        [
         "Disappear completely",
         "Shrink along the field",
         "Align with the field, and those along the field grow in size",
         "Rotate to point opposite to the field"
        ],
        2,
        "Each domain already has a net magnetisation; the field turns them towards B₀ and the domains oriented along B₀ grow."
       ]
      ],
      [
       [
        "Assertion (A): An isolated north pole can be obtained by cutting a bar magnet at its middle.\nReason (R): Magnetic monopoles do not exist.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "Cutting a magnet gives two smaller magnets, each with N and S poles. R is true and is why A is false."
       ],
       [
        "Riya sprinkles iron filings over a glass sheet placed on (i) a short bar magnet and (ii) a current-carrying solenoid, and gets similar patterns. She also hangs the magnet freely and it settles along north–south. Which conclusion is justified?",
        [
         "The magnet is a single north monopole whose field resembles a solenoid",
         "The magnet carries a net electric charge that aligns the filings",
         "The magnet is a magnetic dipole with two poles, resembling a solenoid, and its north-seeking end is its north pole",
         "The solenoid has only one pole because the filings start at one end"
        ],
        2,
        "Similar patterns show both act as magnetic dipoles; a freely suspended magnet points N–S, and its north-seeking tip is called the north pole."
       ],
       [
        "A student writes: “Field lines of a bar magnet start at its north pole and end at its south pole, just like the lines of an electric dipole start at + and end at −.” What is wrong?",
        [
         "Magnetic lines start at the south pole and end at the north pole",
         "Magnetic lines are closed loops, continuing inside the magnet from S to N",
         "Electric dipole lines also form closed loops",
         "There are no field lines inside a magnet"
        ],
        1,
        "Since monopoles do not exist, magnetic field lines are continuous closed loops; inside the magnet they run from S to N."
       ],
       [
        "Which of these could be a correct pattern of static magnetic field lines?",
        [
         "Lines radiating outward from a point in all directions",
         "Two field lines crossing at a point in empty space",
         "A closed loop of field line in empty space, enclosing no current",
         "Closed circular loops around a long straight current-carrying wire"
        ],
        3,
        "Lines cannot emanate from a point (net flux would be non-zero), cannot cross, and a closed loop must enclose a current. Circles around a wire are correct. (NCERT Example 5.3)"
       ],
       [
        "A bar magnet is modelled as a solenoid carrying a fixed current. It is cut transversely into two equal halves. Compared with the original, each half has:",
        [
         "Magnetic moment m, magnetisation M doubled",
         "Magnetic moment m/2, magnetisation M unchanged",
         "Magnetic moment m/2, magnetisation M halved",
         "Magnetic moment m, magnetisation M unchanged"
        ],
        1,
        "Half the turns gives m = NIA/2; the volume is also halved, so M = m/V is unchanged. The pieces are weaker magnets."
       ],
       [
        "A closely wound solenoid of 2000 turns and cross-section 1.6 × 10⁻⁴ m² carries 4.0 A. It is free to turn in a horizontal plane, and a horizontal field of 7.5 × 10⁻² T is applied at 30° to its axis. What is the torque on it?",
        [
         "4.8 × 10⁻² N m",
         "8.3 × 10⁻² N m",
         "9.6 × 10⁻² N m",
         "1.28 × 10⁻² N m"
        ],
        0,
        "m = NIA = 2000 × 4 × 1.6 × 10⁻⁴ = 1.28 J T⁻¹; τ = mB sin 30° = 1.28 × 7.5 × 10⁻² × 0.5 = 4.8 × 10⁻² N m. The net force is zero. (NCERT Exercise 5.6)",
        "First find m = NIA, then τ = mB sin θ."
       ],
       [
        "A bar magnet of moment 1.5 J T⁻¹ lies along a uniform field of 0.22 T. How much work must an external torque do to turn it through 120°?",
        [
         "0.165 J",
         "0.33 J",
         "0.495 J",
         "0.66 J"
        ],
        2,
        "W = mB(cos 0° − cos 120°) = 1.5 × 0.22 × 1.5 = 0.495 J. (0.33 J would be 90°, 0.66 J would be 180°.)",
        "W = U(θ₂) − U(θ₁), with U = −mB cos θ."
       ],
       [
        "Assertion (A): A bar magnet in a uniform magnetic field experiences a torque but no net force.\nReason (R): The magnetic potential energy of a dipole is minimum when m is parallel to B.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        1,
        "Both are true. The zero net force is due to the field being uniform (equal and opposite forces on the two ends); R is a separate fact and does not explain A."
       ],
       [
        "At a point on the equatorial line of a short bar magnet, 10 cm from its centre, the field is 2.4 × 10⁻⁵ T. What is the field on the axis of the same magnet at 20 cm from its centre?",
        [
         "1.2 × 10⁻⁵ T",
         "3 × 10⁻⁶ T",
         "6 × 10⁻⁶ T",
         "4.8 × 10⁻⁵ T"
        ],
        2,
        "B_E = (µ₀/4π)m/r³ gives (µ₀/4π)m = 2.4 × 10⁻⁸. Then B_A = 2 × 2.4 × 10⁻⁸/(0.2)³ = 6 × 10⁻⁶ T.",
        "B_A = 2 (µ₀/4π) m/r³ and B_E = (µ₀/4π) m/r³."
       ],
       [
        "A student says: “For a short bar magnet, the field at a point on its equator at distance r is µ₀m/(4πr³), in the same direction as m.” What is wrong?",
        [
         "The magnitude should be 2µ₀m/(4πr³)",
         "The magnitude should be µ₀m/(2πr³)",
         "Both magnitude and direction are correct",
         "The magnitude is right, but the direction is opposite to m"
        ],
        3,
        "B_E = −(µ₀/4π)(m/r³): the magnitude is right, but the equatorial field points opposite to m (unlike the axial field)."
       ],
       [
        "Assertion (A): The net magnetic flux through any closed surface is zero.\nReason (R): The magnetic field is zero everywhere inside a closed surface.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "A is Gauss’s law for magnetism. R is false: field lines can pass through the surface, entering as many as leave, so the flux cancels."
       ],
       [
        "A closed box is placed in a non-uniform magnetic field. The magnetic flux through five faces is +3, −1, +2, +4 and −2 mWb. What is the flux through the sixth face?",
        [
         "+6 mWb",
         "−6 mWb",
         "Zero",
         "+2 mWb"
        ],
        1,
        "The net flux through a closed surface is zero, so the sixth face carries −(3 − 1 + 2 + 4 − 2) = −6 mWb.",
        "Use ∮B·dS = 0."
       ],
       [
        "A long solenoid has 500 turns per metre and carries 4 A. Its core has µᵣ = 200. What is the magnetic field B in the core? (µ₀ = 4π × 10⁻⁷ T m A⁻¹)",
        [
         "2.5 × 10⁻³ T",
         "0.25 T",
         "0.50 T",
         "1.0 T"
        ],
        2,
        "H = nI = 2000 A m⁻¹, so B = µᵣµ₀H = 200 × 4π × 10⁻⁷ × 2000 ≈ 0.50 T. (2.5 × 10⁻³ T is the field without the core.)",
        "B = µᵣµ₀H, with H = nI."
       ],
       [
        "In a solenoid core the field is B = 1.2 T and H = 2000 A m⁻¹. A student writes M = B/µ₀ = 9.55 × 10⁵ A m⁻¹. What is wrong?",
        [
         "He forgot to subtract H: M = B/µ₀ − H ≈ 9.53 × 10⁵ A m⁻¹",
         "He should add H: M ≈ 9.57 × 10⁵ A m⁻¹",
         "He should multiply B by µ₀ instead of dividing",
         "Nothing is wrong"
        ],
        0,
        "B = µ₀(H + M), so M = B/µ₀ − H = 9.549 × 10⁵ − 2000 ≈ 9.53 × 10⁵ A m⁻¹."
       ],
       [
        "Three materials P, Q and R have relative permeabilities 0.99998, 1.00002 and 1200 respectively. They are respectively:",
        [
         "Paramagnetic, diamagnetic, ferromagnetic",
         "Diamagnetic, ferromagnetic, paramagnetic",
         "Diamagnetic, paramagnetic, ferromagnetic",
         "Ferromagnetic, paramagnetic, diamagnetic"
        ],
        2,
        "µᵣ < 1 means diamagnetic, µᵣ slightly above 1 means paramagnetic, and µᵣ ≫ 1 means ferromagnetic."
       ],
       [
        "A superconducting rod fills the core of a long solenoid, where the magnetic intensity is H = 500 A m⁻¹. What are M and B inside the rod?",
        [
         "M = −500 A m⁻¹, B = 0",
         "M = 0, B = µ₀H",
         "M = +500 A m⁻¹, B = 2µ₀H",
         "M = −500 A m⁻¹, B = −µ₀H"
        ],
        0,
        "A superconductor is a perfect diamagnet (χ = −1, µᵣ = 0), so M = −H = −500 A m⁻¹ and B = µ₀(H + M) = 0 (Meissner effect)."
       ],
       [
        "A bismuth rod and an aluminium rod are placed near the stronger part of a non-uniform field. Which statement is correct?",
        [
         "Both are attracted towards the stronger field",
         "Bismuth is repelled towards the weaker field; aluminium is weakly attracted towards the stronger field",
         "Both are repelled towards the weaker field",
         "Bismuth is strongly attracted; aluminium is repelled"
        ],
        1,
        "Bismuth is diamagnetic (induced moment opposes the field), so it moves to weaker field. Aluminium is paramagnetic and moves weakly towards stronger field."
       ],
       [
        "A paramagnetic sample has already reached its saturation magnetisation. Which of these will increase its magnetisation further?",
        [
         "Doubling the applied field",
         "Lowering the temperature",
         "Doing both of the above",
         "None of these, since all atomic dipoles are already aligned"
        ],
        3,
        "At saturation every atomic dipole points along the field, so M cannot increase any more by raising the field or lowering the temperature."
       ],
       [
        "A student says: “Soft iron has µᵣ > 1000, so it will make an excellent permanent magnet.” What is wrong?",
        [
         "Nothing, large µᵣ means magnetisation is retained",
         "High µᵣ does not mean retention: soft iron loses its magnetisation when the field is removed, so alnico-type hard magnets are used",
         "Soft iron is diamagnetic, so it cannot be magnetised",
         "Soft iron has µᵣ < 1000, not > 1000"
        ],
        1,
        "Soft ferromagnets lose their magnetisation when the external field is removed; hard ferromagnets such as alnico retain it and make permanent magnets."
       ],
       [
        "Assertion (A): A ferromagnet becomes paramagnetic at a sufficiently high temperature.\nReason (R): Thermal agitation destroys the domain structure.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Above a high enough temperature the domains disintegrate, so the cooperative alignment is lost and the material behaves as a paramagnet."
       ]
      ]
     ]
    },
    {
     "n": 6,
     "t": "Electromagnetic Induction",
     "levels": [
      [
       [
        "A closed loop is held stationary between the poles of a very strong permanent magnet. The induced current is:",
        [
         "A large current",
         "A small current",
         "No current",
         "A current that keeps reversing"
        ],
        2,
        "An emf is induced only when the magnetic flux CHANGES. A strong but steady field gives no emf (NCERT Example 6.5a)."
       ],
       [
        "Lenz’s law is a consequence of the conservation of:",
        [
         "Charge",
         "Energy",
         "Momentum",
         "Mass"
        ],
        1,
        "If the induced current helped the change instead of opposing it, energy would come from nowhere. So Lenz’s law follows from conservation of energy."
       ],
       [
        "The north pole of a magnet is pushed towards a coil. The face of the coil nearest the magnet behaves as a:",
        [
         "North pole",
         "South pole",
         "No pole",
         "Alternately N and S"
        ],
        0,
        "To oppose the increasing flux, the near face becomes a north pole and repels the magnet. The current is anticlockwise as seen from the magnet."
       ],
       [
        "A 10 m wire falls at 5 m/s perpendicular to a field of 0.30 × 10⁻⁴ T. What is the induced emf?",
        [
         "1.5 × 10⁻⁴ V",
         "1.5 × 10⁻³ V",
         "3.0 × 10⁻³ V",
         "15 V"
        ],
        1,
        "e = Blv = 0.30 × 10⁻⁴ × 10 × 5 = 1.5 × 10⁻³ V. (NCERT Exercise 6.6)"
       ],
       [
        "A 1 m rod rotates about one end at 400 rad/s in a 0.5 T field parallel to the axis. What emf develops between its ends?",
        [
         "50 V",
         "200 V",
         "100 V",
         "400 V"
        ],
        2,
        "e = ½BωR² = ½ × 0.5 × 400 × 1² = 100 V. (NCERT Exercise 6.5)",
        "For a rotating rod, e = ½BωR²."
       ],
       [
        "Current in a circuit falls from 5 A to 0 in 0.1 s, inducing an average emf of 200 V. What is the self-inductance?",
        [
         "0.4 H",
         "40 H",
         "4 H",
         "2.5 H"
        ],
        2,
        "|e| = L(ΔI/Δt), so L = 200 × 0.1/5 = 4 H. (NCERT Exercise 6.7)"
       ],
       [
        "Two coils have mutual inductance 1.5 H. The current in one changes from 0 to 20 A in 0.5 s. What is the change in flux linkage with the other?",
        [
         "15 Wb",
         "30 Wb",
         "60 Wb",
         "7.5 Wb"
        ],
        1,
        "NΦ = MI, so Δ(NΦ) = 1.5 × 20 = 30 Wb. The time is not needed. (NCERT Exercise 6.8)",
        "The time given is a distractor."
       ],
       [
        "What is the energy stored in a 2 H inductor carrying 3 A?",
        [
         "6 J",
         "9 J",
         "18 J",
         "3 J"
        ],
        1,
        "U = ½LI² = ½ × 2 × 3² = 9 J."
       ],
       [
        "If the number of turns per unit length of a solenoid is doubled (same length and area), its self-inductance:",
        [
         "Doubles",
         "Halves",
         "Becomes four times",
         "Stays the same"
        ],
        2,
        "L = µ₀n²Al, so doubling n multiplies L by 4."
       ],
       [
        "In an AC generator, the induced emf is maximum when the plane of the coil is:",
        [
         "Perpendicular to the field (maximum flux)",
         "Parallel to the field (zero flux)",
         "At 45° to the field",
         "The emf is always the same"
        ],
        1,
        "e = NBAω sin ωt is maximum when the PLANE of the coil is parallel to B: the flux is zero but changing fastest."
       ],
       [
        "In the experiment with two stationary coils, C₁ is joined to a galvanometer and C₂ to a battery through a tapping key. What does the galvanometer show while the key is held pressed down continuously?",
        [
         "A steady deflection in one direction",
         "No deflection",
         "A deflection that keeps alternating",
         "A deflection that slowly grows"
        ],
        1,
        "A deflection appears only while the current in C₂ is changing, that is, when the key is pressed or released. A steady current gives a steady flux and no induced emf."
       ],
       [
        "Oersted and Ampere showed that electric currents produce magnetic fields. The converse effect, a changing magnetic field producing an electric current, was demonstrated by:",
        [
         "Oersted and Ampere",
         "Coulomb and Gauss",
         "Lenz and Tesla",
         "Faraday and Henry"
        ],
        3,
        "Around 1830, Michael Faraday in England and Joseph Henry in the USA independently showed that a moving magnet or a changing current can induce current in a nearby coil."
       ],
       [
        "A flat loop of area 0.05 m² is in a uniform field of 0.4 T. The angle between the field and the area vector of the loop is 60°. What is the magnetic flux through the loop?",
        [
         "0.02 Wb",
         "0.017 Wb",
         "0.01 Wb",
         "0.04 Wb"
        ],
        2,
        "Φ = BA cos θ = 0.4 × 0.05 × cos 60° = 0.01 Wb."
       ],
       [
        "The flux through each turn of a 100-turn coil falls uniformly from 0.02 Wb to zero in 0.1 s. What is the magnitude of the induced emf?",
        [
         "2 V",
         "200 V",
         "0.2 V",
         "20 V"
        ],
        3,
        "|e| = N ΔΦ/Δt = 100 × 0.02/0.1 = 20 V."
       ],
       [
        "The SI unit of inductance, the henry, is equal to:",
        [
         "1 Wb A⁻¹",
         "1 Wb A",
         "1 V A⁻¹",
         "1 T A⁻¹"
        ],
        0,
        "Inductance is flux linkage divided by current, so 1 H = 1 Wb A⁻¹ (which also equals 1 V s A⁻¹)."
       ],
       [
        "The mutual inductance of a pair of coils depends on:",
        [
         "Only the current in the first coil",
         "Only the emf induced in the second coil",
         "Their separation and relative orientation",
         "The rate at which the current changes"
        ],
        2,
        "Mutual inductance is a geometric property of the pair (and the medium): it depends on their separation and relative orientation, not on the current or its rate of change."
       ]
      ],
      [
       [
        "Which of these situations will induce a current in a closed coil C₁?\n(i) A steady current of 5 A in a stationary neighbouring coil C₂\n(ii) A bar magnet being pushed towards C₁\n(iii) The current in C₂ being switched on\n(iv) C₁ held at rest between the poles of a very strong fixed magnet",
        [
         "(i) and (iv) only",
         "(ii) and (iii) only",
         "(i), (ii) and (iii)",
         "All four"
        ],
        1,
        "Current is induced only when the flux through C₁ changes: moving the magnet and switching C₂ on both change it. A steady current or a steady strong field gives no change."
       ],
       [
        "Assertion (A): In the two-coil experiment, the galvanometer shows no deflection while the key is held pressed, even though the current in the battery coil is large.\nReason (R): The induced emf depends on the rate of change of magnetic flux, not on the magnitude of the flux.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "With a steady current the flux through the second coil is constant, so dΦ/dt = 0 and the emf is zero, however large the flux is. R explains A."
       ],
       [
        "A flat coil of area 200 cm² is placed in a uniform field of 0.4 T so that the plane of the coil makes an angle of 30° with the field. What is the flux through the coil?",
        [
         "4.0 × 10⁻³ Wb",
         "6.9 × 10⁻³ Wb",
         "8.0 × 10⁻³ Wb",
         "2.0 × 10⁻³ Wb"
        ],
        0,
        "The angle between B and the area vector is 90° − 30° = 60°, so Φ = 0.4 × 0.02 × cos 60° = 4 × 10⁻³ Wb.",
        "Use the angle between B and the normal to the plane."
       ],
       [
        "A circular coil of radius 5 cm, 200 turns and resistance 4 Ω has its plane perpendicular to a field of 0.2 T. It is turned through 180° in 0.1 s. Estimate the average current induced.",
        [
         "0.79 A",
         "3.14 A",
         "1.57 A",
         "6.28 A"
        ],
        2,
        "ΔΦ = 2BA = 2 × 0.2 × π × (0.05)² = 3.14 × 10⁻³ Wb, so e = NΔΦ/Δt = 6.28 V and I = e/R = 1.57 A (cf. NCERT Example 6.3).",
        "The flux changes from +BA to −BA."
       ],
       [
        "A bar magnet is dropped, north pole first, along the axis of a closed copper ring and, separately, through an identical ring that has a small cut. Which statement is correct?",
        [
         "Both rings make the magnet fall with acceleration less than g",
         "The closed ring makes it fall with acceleration less than g; with the cut ring it falls almost freely, though an emf is still induced across the cut",
         "The cut ring slows the magnet more because the emf across the gap is larger",
         "Both rings leave the fall unaffected since copper is non-magnetic"
        ],
        1,
        "In the closed ring an induced current flows and opposes the motion (Lenz’s law), so the magnet is slowed. In the cut ring there is an emf but no current, so there is no opposing force."
       ],
       [
        "A student writes: “When the north pole of a magnet is withdrawn from a coil, the flux decreases, so the near face of the coil becomes a north pole and repels the magnet to slow it.” What is wrong?",
        [
         "Nothing is wrong",
         "No current flows because the flux is decreasing",
         "The near face becomes a south pole, which attracts the magnet and so opposes its withdrawal",
         "The induced current opposes the magnet’s field, not the change in flux, so the face is unaffected"
        ],
        2,
        "Lenz’s law opposes the change. Withdrawal reduces the flux, so the coil tries to keep it up: the near face becomes a south pole, which attracts the receding magnet (clockwise current seen from the magnet)."
       ],
       [
        "A rod of length 0.5 m slides at a constant 4 m/s on two parallel rails that are 0.5 m apart and joined by a 2 Ω resistor, in a uniform field of 0.2 T perpendicular to the rails. What mechanical power must be supplied to keep the rod moving uniformly? (Neglect friction and rail resistance.)",
        [
         "0.04 W",
         "0.16 W",
         "0.08 W",
         "0.40 W"
        ],
        2,
        "e = Blv = 0.2 × 0.5 × 4 = 0.4 V, I = e/R = 0.2 A, and the power = I²R = 0.08 W (equal to F v with F = BIl = 0.02 N).",
        "Power supplied = power dissipated in the resistor."
       ],
       [
        "A student calculates the emf between the ends of a 0.5 m rod rotating at 40 rad/s about one end in a field of 0.2 T (parallel to the axis) as e = B l v = 0.2 × 0.5 × (40 × 0.5) = 2 V. What is the error and the correct value?",
        [
         "No error; 2 V is correct",
         "The rod length should be squared, so e = 4 V",
         "The emf must be divided by 40, so e = 0.05 V",
         "The speed should be the average speed of the rod, ωl/2, so e = 1 V"
        ],
        3,
        "Different points of the rod move at different speeds from 0 to ωl, so use the mean speed ωl/2: e = ½Bωl² = ½ × 0.2 × 40 × 0.25 = 1 V."
       ],
       [
        "Assertion (A): A closed rectangular loop moving with constant velocity entirely inside a uniform magnetic field has no induced current.\nReason (R): The magnetic flux through the loop is zero.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "A is true because the flux does not change, so there is no emf. R is false: the flux is BA, not zero, but it stays constant."
       ],
       [
        "Which of the following has the same dimensions as inductance?",
        [
         "Ω s⁻¹",
         "Ω² s",
         "J A⁻¹",
         "Ω s"
        ],
        3,
        "e = L dI/dt gives L = V s/A = (V/A) s = Ω s. J A⁻¹ is a weber, the unit of flux, not of inductance."
       ],
       [
        "Two long co-axial solenoids of the same length 0.5 m have 1000 and 2000 turns per metre; the inner one has radius 2 cm. A current in the inner solenoid changes by 5 A in 0.01 s. What emf is induced in the outer solenoid?",
        [
         "0.79 V",
         "0.40 V",
         "1.58 V",
         "7.9 V"
        ],
        0,
        "M = µ₀n₁n₂πr₁²l = 4π × 10⁻⁷ × 1000 × 2000 × π × (0.02)² × 0.5 = 1.58 × 10⁻³ H, so e = M ΔI/Δt = 1.58 × 10⁻³ × 500 = 0.79 V.",
        "The flux is confined to the inner radius."
       ],
       [
        "A student says: “M₁₂ for a small coil inside a large coil is 0.2 H, but M₂₁ must be smaller because the large coil is not affected much by the small one.” What is wrong?",
        [
         "Nothing is wrong",
         "M₂₁ is zero because the small coil has little flux",
         "M₁₂ = M₂₁ always, so M₂₁ is also 0.2 H",
         "M₂₁ must be larger, because the large coil has more turns"
        ],
        2,
        "Mutual inductance is symmetric: M₁₂ = M₂₁. The equality is useful when one of the two is much easier to calculate."
       ],
       [
        "A solenoid has 1000 turns, length 0.5 m and cross-section 2 × 10⁻⁴ m², with a soft-iron core of relative permeability 400. How much energy is stored when it carries 2 A?",
        [
         "1.0 × 10⁻³ J",
         "0.20 J",
         "0.80 J",
         "0.40 J"
        ],
        3,
        "L = µᵣµ₀n²Al = 400 × 4π × 10⁻⁷ × (2000)² × 2 × 10⁻⁴ × 0.5 = 0.201 H, so U = ½LI² = ½ × 0.201 × 4 ≈ 0.40 J.",
        "n = N/l = 2000 m⁻¹."
       ],
       [
        "Assertion (A): The self-inductance of a coil depends on the current flowing through it.\nReason (R): The flux linked with a coil is proportional to the current through it.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "A is false: L = NΦ/I depends only on geometry and the medium (µᵣ). R is true, but it is the reason the ratio NΦ/I is a constant, not a dependence on I."
       ],
       [
        "A rectangular coil of 200 turns and area 0.05 m² rotates at 50 Hz in a uniform field of 0.2 T, about an axis perpendicular to the field. The emf is zero at t = 0. What is the emf at t = 1/600 s?",
        [
         "50 V",
         "314 V",
         "544 V",
         "628 V"
        ],
        1,
        "e₀ = NBAω = 200 × 0.2 × 0.05 × 100π = 628 V, and ωt = π/6, so e = 628 × sin 30° = 314 V.",
        "Convert frequency to ω = 2πn first."
       ],
       [
        "The coil of an ac generator is spun twice as fast, with everything else unchanged. What happens to the peak emf and to the frequency of the emf?",
        [
         "Both stay the same",
         "Peak emf doubles; frequency stays the same",
         "Peak emf stays the same; frequency doubles",
         "Both double"
        ],
        3,
        "e₀ = NBAω is proportional to ω, and the frequency of the emf equals the rotation frequency, so both double."
       ]
      ]
     ]
    },
    {
     "n": 7,
     "t": "Alternating Current",
     "levels": [
      [
       [
        "Household supply is 220 V (rms). What is its peak voltage?",
        [
         "220 V",
         "156 V",
         "311 V",
         "440 V"
        ],
        2,
        "V₀ = √2 × V(rms) = 1.414 × 220 ≈ 311 V. The 220 V rating is the rms value."
       ],
       [
        "In a purely inductive AC circuit, the current:",
        [
         "Leads the voltage by π/2",
         "Lags the voltage by π/2",
         "Is in phase with the voltage",
         "Lags by π"
        ],
        1,
        "In a pure inductor the current lags the voltage by π/2. In a pure capacitor it leads by π/2."
       ],
       [
        "What is the reactance of a capacitor for DC?",
        [
         "Zero",
         "1/C",
         "Infinite",
         "Equal to R"
        ],
        2,
        "X_C = 1/ωC. For DC, ω = 0, so X_C is infinite. This is why a capacitor blocks DC."
       ],
       [
        "A 44 mH inductor is connected to a 220 V, 50 Hz supply. What is the rms current?",
        [
         "5 A",
         "15.9 A",
         "22.5 A",
         "1.6 A"
        ],
        1,
        "X_L = 2πfL ≈ 13.8 Ω, so I(rms) = 220/13.8 ≈ 15.9 A. (NCERT Exercise 7.3)",
        "First find X_L = 2πfL."
       ],
       [
        "At resonance in a series LCR circuit:",
        [
         "Impedance is maximum",
         "Current is minimum",
         "X_L = X_C and impedance = R",
         "Power factor is zero"
        ],
        2,
        "At resonance X_L = X_C, so Z = R (minimum) and the current is maximum. ω₀ = 1/√(LC)."
       ],
       [
        "What is the power factor of a purely inductive circuit?",
        [
         "1",
         "0.5",
         "0.707",
         "0"
        ],
        3,
        "For a pure inductor or capacitor, φ = 90°, so cos φ = 0 and the average power is zero (wattless current)."
       ],
       [
        "A series LCR circuit has R = 30 Ω, X_L = 80 Ω and X_C = 40 Ω. What is its impedance?",
        [
         "150 Ω",
         "50 Ω",
         "70 Ω",
         "10 Ω"
        ],
        1,
        "Z = √(R² + (X_L − X_C)²) = √(30² + 40²) = 50 Ω."
       ],
       [
        "An ideal transformer has 100 primary and 2000 secondary turns, with 220 V input. What is the output voltage?",
        [
         "11 V",
         "2200 V",
         "4400 V",
         "44,000 V"
        ],
        2,
        "Vₛ/Vₚ = Nₛ/Nₚ, so Vₛ = 220 × 20 = 4400 V. The current is stepped DOWN in the same ratio."
       ],
       [
        "The iron core of a transformer is laminated to reduce:",
        [
         "Copper loss",
         "Eddy current loss",
         "Flux leakage",
         "Hysteresis loss only"
        ],
        1,
        "Laminations break up the paths of eddy currents in the core, reducing energy lost as heat."
       ],
       [
        "At resonance in a series LCR circuit, the voltages across L and C are:",
        [
         "Equal and in phase",
         "Both zero",
         "Equal in magnitude and 180° out of phase",
         "Unequal and 90° out of phase"
        ],
        2,
        "V_L leads the current by 90° and V_C lags it by 90°. At resonance they are equal and cancel, so the whole supply voltage appears across R."
       ],
       [
        "Why is alternating voltage preferred over direct voltage for supplying electrical energy?",
        [
         "AC cannot be used in motors",
         "AC voltages can be easily and efficiently changed from one value to another by transformers",
         "AC wires have no resistance",
         "AC sources never need a generator"
        ],
        1,
        "Transformers work only on ac, so voltage can be stepped up for economical long-distance transmission and stepped down for use (NCERT Section 7.1)."
       ],
       [
        "In a phasor diagram for v = v_m sin ωt, what do the length of the phasor and its vertical component represent?",
        [
         "Length = rms value, vertical component = average value",
         "Length = amplitude, vertical component = instantaneous value",
         "Length = instantaneous value, vertical component = amplitude",
         "Length = average value, vertical component = rms value"
        ],
        1,
        "A phasor rotates at angular speed ω; its magnitude is the peak value and its vertical projection v_m sin ωt is the value at that instant."
       ]
      ],
      [
       [
        "Assertion (A): Electrical energy is mostly transmitted over long distances as alternating current rather than direct current.\nReason (R): The voltage of an ac supply can be easily stepped up or down using transformers.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Stepping the voltage up cuts the current and hence the I²R loss, and only ac can be transformed. So R explains A."
       ],
       [
        "A bulb rated 100 W for a 220 V (rms) supply is connected to a source whose peak voltage is 220 V. Taking its resistance as unchanged, the power it consumes is:",
        [
         "100 W",
         "50 W",
         "70.7 W",
         "25 W"
        ],
        1,
        "R = 220²/100 = 484 Ω. V(rms) = 220/√2 = 155.6 V, so P = V²/R = 50 W.",
        "Find R from the rating, then the rms value of the new source."
       ],
       [
        "A student argues: “The average current over a full cycle is zero, so an ac current through a resistor produces no heating.” What is wrong?",
        [
         "The average power over a cycle is also zero",
         "Heating needs a voltage, not a current",
         "Heating depends on i²R, which is always positive, so the average power is ½ i_m²R, not zero",
         "A resistor does not heat on ac, only on dc"
        ],
        2,
        "Joule heating depends on i², which is positive for both directions, so the average power is I²R with I = i_m/√2."
       ],
       [
        "For an ac source v = v_m sin ωt, a pure inductor carries i = i_m sin(ωt − π/2). At the instant ωt = 30°, the ratio i/i_m is:",
        [
         "+0.866",
         "+0.5",
         "−0.5",
         "−0.866"
        ],
        3,
        "i/i_m = sin(30° − 90°) = sin(−60°) = −0.866. The current phasor is 90° behind the voltage phasor.",
        "Put ωt = 30° into the current equation."
       ],
       [
        "An inductor of negligible resistance draws 2 A (rms) from a 100 V, 50 Hz source. The current when it is connected to a 200 V, 100 Hz source is:",
        [
         "2 A",
         "1 A",
         "4 A",
         "8 A"
        ],
        0,
        "I = V/(2πfL). Doubling both V and f leaves the current unchanged: X_L is also doubled, so I = 200/100 = 2 A.",
        "X_L = 100/2 = 50 Ω at first."
       ],
       [
        "A bulb is connected in series with a coil of negligible resistance. Which statement is correct for a 220 V dc and a 220 V ac supply?",
        [
         "It glows fully on ac and dimly on dc",
         "It glows equally on both; an iron rod in the coil makes it dimmer",
         "It glows fully on dc; on ac it is dim and becomes brighter when an iron rod is inserted",
         "It glows fully on dc; on ac it is dim and becomes still dimmer when an iron rod is inserted"
        ],
        3,
        "On dc there is no reactance. On ac the coil has X_L = ωL, which grows when an iron rod raises L, so less voltage is left across the bulb (NCERT Example 7.5)."
       ],
       [
        "A 20 µF capacitor is connected to a 100 V (rms) source of angular frequency 100π rad/s. The peak current is about:",
        [
         "0.628 A",
         "0.888 A",
         "1.26 A",
         "0.444 A"
        ],
        1,
        "X_C = 1/(100π × 20 × 10⁻⁶) = 159 Ω. I(rms) = 100/159 = 0.628 A, so i_m = √2 × 0.628 = 0.888 A.",
        "Do not forget to convert rms to peak."
       ],
       [
        "A series circuit has R = 30 Ω, L = 0.5 H and C = 500 µF, and is connected to a 100 V (rms) source of ω = 100 rad/s. The rms current and the phase relation are:",
        [
         "1.67 A, current lags the voltage",
         "2.36 A, current leads the voltage",
         "2.36 A, current lags the voltage by 45°",
         "3.33 A, current is in phase with the voltage"
        ],
        2,
        "X_L = 50 Ω, X_C = 20 Ω, Z = √(30² + 30²) = 42.4 Ω, so I = 2.36 A. X_L > X_C, so the current lags, with tan φ = 30/30.",
        "Find X_L and X_C first."
       ],
       [
        "In an RC series circuit, V_R = 60 V and V_C = 80 V (rms). A student says the source voltage is 140 V because the same current flows in both. The correct statement is:",
        [
         "Wrong: V_R and V_C differ in phase by 90°, so V = √(60² + 80²) = 100 V",
         "Wrong: V_C opposes V_R, so V = 80 − 60 = 20 V",
         "Correct: series voltages always add arithmetically",
         "Wrong: the source voltage is the mean, 70 V"
        ],
        0,
        "The resistor and capacitor voltages are 90° out of phase and add as phasors, giving 100 V (NCERT Example 7.6)."
       ],
       [
        "Assertion (A): In a series LCR circuit with X_L > X_C, the current lags the source voltage.\nReason (R): The voltage across the inductor leads the current by 90°, the voltage across the capacitor lags it by 90°, and V_L is larger than V_C.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "With X_L > X_C the net reactive voltage V_L − V_C leads the current by 90°, so the source voltage leads and the current lags. R explains A."
       ],
       [
        "A series LCR circuit has R = 10 Ω, L = 5 mH and C = 20 µF, and a 50 V (rms) source whose frequency is varied to resonance. The rms voltage across the inductor at resonance is about:",
        [
         "50 V",
         "112 V",
         "158 V",
         "79 V"
        ],
        3,
        "ω₀ = 1/√(LC) = 3162 rad/s and I = 50/10 = 5 A. V_L = I ω₀L = 5 × 3162 × 0.005 ≈ 79 V, more than the source voltage.",
        "Find ω₀, then use I = V/R at resonance."
       ],
       [
        "Assertion (A): Resonance cannot occur in a series RC circuit.\nReason (R): In an RC circuit the current is always in phase with the source voltage.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "Resonance needs both L and C so that their voltages cancel. In an RC circuit the current leads the voltage, so R is false."
       ],
       [
        "A radio is tuned to a station at 600 kHz with a tuning capacitor of 200 pF. To tune to a station at 1200 kHz with the same coil, the capacitance should be:",
        [
         "400 pF",
         "100 pF",
         "50 pF",
         "25 pF"
        ],
        2,
        "ω₀ = 1/√(LC), so f ∝ 1/√C. Doubling f needs C to fall to one-fourth, i.e. 50 pF.",
        "Frequency doubles, so what happens to C?"
       ],
       [
        "A series circuit has R = 8 Ω, X_L = 14 Ω, X_C = 8 Ω and a 200 V (rms) source. The average power dissipated is:",
        [
         "4000 W",
         "3200 W",
         "2400 W",
         "5600 W"
        ],
        1,
        "Z = √(8² + 6²) = 10 Ω, I = 20 A, so P = I²R = 400 × 8 = 3200 W. Check: VI cos φ = 200 × 20 × 0.8.",
        "Power is dissipated only in R."
       ],
       [
        "In a series circuit V = 100 V, I = 5 A (rms) and φ = 60°. A student writes P = 100 × 5 × sin 60° = 433 W. The error and correct answer are:",
        [
         "Uses tan φ; correct value is 866 W",
         "Nothing is wrong, since sin 60° is the power factor",
         "Uses sin φ instead of cos φ; correct power is 250 W",
         "Uses sin φ instead of cos φ; correct power is 433 W with φ = 30°"
        ],
        2,
        "The power factor is cos φ, so P = VI cos φ = 100 × 5 × 0.5 = 250 W."
       ],
       [
        "The same power is delivered through a transmission line at the same voltage. If the power factor of the load falls from 1 to 0.5, the power lost in the line becomes:",
        [
         "Double",
         "Unchanged",
         "Half",
         "Four times"
        ],
        3,
        "I = P/(V cos φ) doubles when cos φ halves, so the line loss I²R becomes four times (NCERT Example 7.7)."
       ],
       [
        "A step-down transformer has 2000 primary and 100 secondary turns, with a 4400 V primary. It delivers 4.4 kW at the secondary and is 90% efficient. The primary current is:",
        [
         "1.0 A",
         "0.9 A",
         "1.11 A",
         "20 A"
        ],
        2,
        "V_s = 4400 × 100/2000 = 220 V. Input power = 4400/0.9 = 4889 W, so I_p = 4889/4400 = 1.11 A.",
        "Input power = output power / efficiency."
       ],
       [
        "The primary of a transformer is connected to a 12 V battery (dc) through a switch. What happens at the secondary?",
        [
         "Only a momentary emf at switching; no steady emf because the flux is constant",
         "A steady voltage of 12 × N_s/N_p appears",
         "An alternating voltage of 50 Hz appears",
         "The primary current stays zero because the coil blocks dc"
        ],
        0,
        "A transformer works on changing flux. Steady dc gives constant flux, so no steady emf is induced, and the primary current is limited only by its small resistance."
       ]
      ]
     ]
    },
    {
     "n": 8,
     "t": "Electromagnetic Waves",
     "levels": [
      [
       [
        "The displacement current is given by:",
        [
         "ε₀ Φ_E",
         "ε₀ (dΦ_E/dt)",
         "µ₀ (dΦ_B/dt)",
         "(1/ε₀)(dΦ_E/dt)"
        ],
        1,
        "i_d = ε₀ (dΦ_E/dt). Maxwell added this term to Ampere’s law: a changing electric field produces a magnetic field."
       ],
       [
        "Between the plates of a capacitor that is being charged, there is:",
        [
         "Only conduction current",
         "Both, equal in size",
         "Only displacement current",
         "Neither"
        ],
        2,
        "No charge crosses the gap, so i_c = 0. The changing field gives a displacement current equal to the current in the wires."
       ],
       [
        "The magnetic field amplitude of an EM wave in vacuum is 510 nT. What is the electric field amplitude?",
        [
         "1.7 V/m",
         "153 V/m",
         "510 V/m",
         "1530 V/m"
        ],
        1,
        "E₀ = cB₀ = 3 × 10⁸ × 510 × 10⁻⁹ = 153 V/m. (NCERT Exercise 8.7)"
       ],
       [
        "What is the wavelength of a 30 MHz EM wave in vacuum?",
        [
         "1 m",
         "100 m",
         "10 m",
         "0.1 m"
        ],
        2,
        "λ = c/ν = 3 × 10⁸/(30 × 10⁶) = 10 m. (NCERT Exercise 8.4)"
       ],
       [
        "Electromagnetic waves are produced by:",
        [
         "Stationary charges",
         "Charges moving with constant velocity",
         "Accelerated charges",
         "Steady currents"
        ],
        2,
        "Stationary charges give only static fields and steady currents give only steady fields. Only ACCELERATED charges radiate EM waves."
       ],
       [
        "An EM wave travels along the x-axis and its E field is along the y-axis. Its B field is along the:",
        [
         "x-axis",
         "y-axis",
         "z-axis",
         "At 45° to y and z"
        ],
        2,
        "E × B points along the direction of travel (+x). Since ĵ × k̂ = î, B points along z. (NCERT Example 8.1)",
        "E × B points in the direction of propagation."
       ],
       [
        "Which of these has the LONGEST wavelength?",
        [
         "X-rays",
         "Ultraviolet",
         "Microwaves",
         "Infrared"
        ],
        2,
        "Increasing wavelength: γ, X-rays, UV, visible, IR, microwaves, radio. Microwaves are the longest of these four."
       ],
       [
        "Which radiation is used in LASIK eye surgery and in water purifiers?",
        [
         "Infrared",
         "Ultraviolet",
         "Microwaves",
         "X-rays"
        ],
        1,
        "UV can be focused into very narrow beams (LASIK), and UV lamps kill germs in water purifiers."
       ],
       [
        "What is the SAME for X-rays, red light and radio waves?",
        [
         "Frequency",
         "Energy of a photon",
         "Speed in vacuum",
         "Wavelength"
        ],
        2,
        "All EM waves travel at c = 3 × 10⁸ m/s in vacuum. Only wavelength and frequency differ. (NCERT Exercise 8.3)"
       ],
       [
        "Which radiation is called ‘heat waves’?",
        [
         "Ultraviolet",
         "Infrared",
         "Gamma rays",
         "Radio waves"
        ],
        1,
        "Infrared is absorbed by water molecules and raises their thermal motion, so it heats things up."
       ],
       [
        "What is the most important prediction to emerge from Maxwell’s equations?",
        [
         "The existence of electromagnetic waves",
         "The existence of magnetic monopoles",
         "The particle nature of electricity",
         "That light is a longitudinal wave"
        ],
        0,
        "Maxwell’s equations predict coupled, time-varying electric and magnetic fields that propagate in space, with a speed very close to that of light."
       ],
       [
        "Which of Maxwell’s equations says that a time-varying electric field (or a current) produces a magnetic field?",
        [
         "Gauss’s law for electricity",
         "Ampere–Maxwell law",
         "Gauss’s law for magnetism",
         "Faraday’s law"
        ],
        1,
        "∮B·dl = µ₀iᶜ + µ₀ε₀ dΦ_E/dt. Faraday’s law is the reverse: a changing B produces an E field."
       ],
       [
        "Who first produced and detected electromagnetic waves in the laboratory, in 1887?",
        [
         "James Clerk Maxwell",
         "Guglielmo Marconi",
         "Heinrich Hertz",
         "Michael Faraday"
        ],
        2,
        "Hertz verified Maxwell’s prediction with radio-frequency waves; Marconi later used such waves for long-distance communication."
       ],
       [
        "Radio waves are produced by:",
        [
         "Nuclear reactions",
         "Inner-shell electron transitions",
         "Vibrating atoms and molecules",
         "Accelerated motion of charges in conducting wires"
        ],
        3,
        "Rapid acceleration and deceleration of electrons in aerials produces radio waves, used for radio and TV."
       ],
       [
        "In a microwave oven, the microwave frequency is chosen to:",
        [
         "Match the resonant frequency of the glass plate",
         "Match the resonant frequency of water molecules",
         "Be the same as the frequency of visible light",
         "Be absorbed only by metals"
        ],
        1,
        "Water molecules absorb energy efficiently at their resonant frequency, which raises the temperature of food containing water."
       ],
       [
        "The visible region of the electromagnetic spectrum corresponds roughly to wavelengths of:",
        [
         "4 nm to 7 nm",
         "0.4 mm to 0.7 mm",
         "400 nm to 700 nm",
         "40 nm to 70 nm"
        ],
        2,
        "Visible light runs from about 4 × 10¹⁴ Hz to 7 × 10¹⁴ Hz, i.e. about 700 nm to 400 nm."
       ],
       [
        "A common way of generating X-rays is to:",
        [
         "Heat a glass rod strongly",
         "Pass a steady current through a coil",
         "Use a magnetron valve",
         "Bombard a metal target with high-energy electrons"
        ],
        3,
        "X-ray tubes work by stopping fast electrons in a metal target."
       ],
       [
        "Gamma rays are produced in:",
        [
         "Nuclear reactions and by radioactive nuclei",
         "Klystron tubes",
         "Hot filament lamps",
         "Oscillating circuits"
        ],
        0,
        "Gamma rays lie at the highest-frequency end of the spectrum; the nucleus is their source, and they are used to destroy cancer cells."
       ]
      ],
      [
       [
        "Assertion (A): Maxwell’s work unified electricity, magnetism and light.\nReason (R): The speed of electromagnetic waves obtained from Maxwell’s equations came out very close to the measured speed of light.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "The calculated speed 1/√(µ₀ε₀) ≈ 3 × 10⁸ m/s matched optical measurements, so light was identified as an electromagnetic wave."
       ],
       [
        "The charging current of a parallel plate capacitor with circular plates of radius 12 cm is a constant 0.15 A. What is the magnetic field between the plates at a distance 6 cm from the axis? (Take µ₀/4π = 10⁻⁷ T m A⁻¹.)",
        [
         "1.25 × 10⁻⁷ T",
         "2.5 × 10⁻⁷ T",
         "5.0 × 10⁻⁷ T",
         "6.25 × 10⁻⁸ T"
        ],
        0,
        "Displacement current is uniform over the plates, so the part inside radius r is i(r²/R²) = 0.15 × 0.25 = 0.0375 A. B = µ₀i_d/(2πr) = 2 × 10⁻⁷ × 0.0375/0.06 = 1.25 × 10⁻⁷ T.",
        "Only the displacement current through the circle of radius r counts."
       ],
       [
        "A parallel plate capacitor of capacitance 100 pF is connected to a 230 V (rms) ac supply of angular frequency 300 rad s⁻¹. What is the amplitude of the displacement current between the plates?",
        [
         "6.9 µA",
         "9.8 µA",
         "4.9 µA",
         "13.8 µA"
        ],
        1,
        "i_rms = V ωC = 230 × 300 × 100 × 10⁻¹² = 6.9 µA. The displacement current equals the conduction current in the wires, so its amplitude is √2 × 6.9 ≈ 9.8 µA. (NCERT Exercise 8.2)",
        "Displacement current between the plates equals the conduction current in the wires."
       ],
       [
        "A student argues: “For a capacitor being charged, a pot-shaped surface passing between the plates has no current through it, so Ampere’s law gives B = 0 at the loop.” What is wrong?",
        [
         "Ampere’s law cannot be applied to a loop",
         "The surface must touch the wire to be valid",
         "The displacement current ε₀ dΦ_E/dt through that surface was left out, so B is not zero",
         "The electric field between the plates is zero"
        ],
        2,
        "The generalised Ampere–Maxwell law includes µ₀ε₀ dΦ_E/dt; the changing field between the plates carries i_d = i, giving the same B for every surface."
       ],
       [
        "If magnetic monopoles were found to exist, which of Maxwell’s equations would have to be modified?",
        [
         "Gauss’s law for electricity",
         "The expression for the Lorentz force",
         "The relation c = νλ",
         "Gauss’s law for magnetism, ∮B·dA = 0"
        ],
        3,
        "∮B·dA = 0 states that there are no sources of magnetic field analogous to electric charges. With monopoles, the net magnetic flux through a closed surface would not vanish."
       ],
       [
        "Which of these charges will radiate electromagnetic waves?",
        [
         "A charge at rest",
         "A charge moving in a circle at constant speed",
         "A charge moving with constant velocity along a straight line",
         "A charge in a steady direct current"
        ],
        1,
        "Circular motion at constant speed still involves acceleration, because the direction of velocity changes. Only accelerated charges radiate."
       ],
       [
        "Yellow light has a frequency of about 6 × 10¹⁴ Hz. Why did Hertz’s test of Maxwell’s theory have to be done with radio waves and not light, and what is the wavelength of yellow light?",
        [
         "Circuits give only about 10¹¹ Hz, too low to produce light frequencies; λ = 50 nm",
         "Light is not an electromagnetic wave; λ = 500 nm",
         "Circuits give only about 10¹¹ Hz, too low to produce light frequencies; λ = 500 nm",
         "Oscillating charges cannot radiate at low frequency; λ = 500 µm"
        ],
        2,
        "Modern electronic circuits reach only about 10¹¹ Hz, so waves in the radio region were used. λ = c/ν = 3 × 10⁸/6 × 10¹⁴ = 5 × 10⁻⁷ m = 500 nm."
       ],
       [
        "The electric field amplitude of an electromagnetic wave in vacuum is 120 N/C and its frequency is 50.0 MHz. What are B₀ and the propagation constant k?",
        [
         "4.0 × 10⁻⁷ T and 0.17 rad m⁻¹",
         "4.0 × 10⁻⁶ T and 1.05 rad m⁻¹",
         "4.0 × 10⁻⁷ T and 6.0 rad m⁻¹",
         "4.0 × 10⁻⁷ T and 1.05 rad m⁻¹"
        ],
        3,
        "B₀ = E₀/c = 120/(3 × 10⁸) = 4 × 10⁻⁷ T. ω = 2π × 50 × 10⁶ = 3.14 × 10⁸ rad/s, so k = ω/c = 1.05 rad m⁻¹ (λ = 6 m). (NCERT Exercise 8.8)",
        "k = ω/c = 2π/λ."
       ],
       [
        "An electromagnetic wave of frequency 100 MHz enters a non-magnetic medium (µ_r = 1) of relative permittivity 2.25. What is its wavelength in the medium?",
        [
         "2 m",
         "3 m",
         "4.5 m",
         "1.33 m"
        ],
        0,
        "v = 1/√(µε) = c/√2.25 = 2 × 10⁸ m/s. The frequency stays 100 MHz, so λ = v/ν = 2 m."
       ],
       [
        "The magnetic field in a plane electromagnetic wave is By = 4 × 10⁻⁷ T sin(1.0 × 10³ x + 3.0 × 10¹¹ t). Which statement is correct?",
        [
         "It travels along +x, E₀ = 120 V/m and λ ≈ 6.3 mm",
         "It travels along −x, E₀ = 120 V/m and λ ≈ 6.3 mm",
         "It travels along −x, E₀ = 1.3 × 10⁻¹⁵ V/m and λ ≈ 6.3 mm",
         "It travels along −x, E₀ = 120 V/m and λ ≈ 0.63 mm"
        ],
        1,
        "A (kx + ωt) argument means travel along −x. E₀ = cB₀ = 3 × 10⁸ × 4 × 10⁻⁷ = 120 V/m and λ = 2π/k = 6.28 mm. (NCERT Example 8.2)"
       ],
       [
        "An electromagnetic wave travels along the −y direction with its electric field along +z. The magnetic field is along:",
        [
         "+x",
         "+z",
         "−x",
         "+y"
        ],
        2,
        "E × B must point along −y. Since ẑ × x̂ = ŷ, we need B along −x to get ẑ × (−x̂) = −ŷ.",
        "E × B gives the direction of propagation."
       ],
       [
        "Which list is in order of INCREASING frequency?",
        [
         "Infrared, microwaves, visible, X-rays",
         "Radio waves, ultraviolet, visible, gamma rays",
         "Visible, ultraviolet, X-rays, microwaves",
         "Microwaves, infrared, visible, X-rays"
        ],
        3,
        "The order of increasing frequency is radio, microwaves, infrared, visible, ultraviolet, X-rays, gamma rays."
       ],
       [
        "An AM station broadcasts at 1000 kHz and an FM station at 100 MHz. What is λ(AM)/λ(FM)?",
        [
         "100",
         "10",
         "0.01",
         "1000"
        ],
        0,
        "In vacuum λ = c/ν, so the ratio is ν(FM)/ν(AM) = 100 MHz/1 MHz = 100 (300 m versus 3 m)."
       ],
       [
        "Assertion (A): A microwave oven heats food that contains water.\nReason (R): The microwave frequency is chosen to match the resonant frequency of water molecules, so energy is transferred efficiently to them.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Water molecules absorb the microwaves at resonance, and the energy becomes their kinetic energy, raising the temperature of the food."
       ],
       [
        "A student writes: “The Earth’s surface absorbs visible light and re-radiates it as visible light, which CO₂ traps.” What is the error?",
        [
         "Greenhouse gases trap only ultraviolet radiation",
         "The surface re-radiates it as infrared (longer wavelength), and this is what greenhouse gases trap",
         "Visible light cannot pass through the atmosphere",
         "Re-radiation is of shorter wavelength than the incoming light"
        ],
        1,
        "Infrared is absorbed by CO₂, water vapour and other gases. This trapping keeps the average temperature of the Earth higher."
       ],
       [
        "Blue light (λ = 450 nm) and red light (λ = 700 nm) travel in vacuum. What is the ratio (photon energy of blue)/(photon energy of red)?",
        [
         "9/14, and blue travels faster",
         "14/9, and blue travels faster",
         "14/9, and both travel at the same speed",
         "1, because both have the same speed"
        ],
        2,
        "E = hc/λ, so E_blue/E_red = 700/450 = 14/9. All electromagnetic waves travel at c in vacuum."
       ],
       [
        "Assertion (A): Welders wear special glass goggles to protect their eyes from ultraviolet rays.\nReason (R): Ordinary glass transmits ultraviolet radiation freely.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "Welding arcs produce large amounts of UV, so protection is needed. But ordinary glass absorbs UV, which is why one cannot get tanned through window glass, so R is false."
       ],
       [
        "What is the photon energy of an X-ray of wavelength 1 nm? (h = 6.63 × 10⁻³⁴ J s, c = 3 × 10⁸ m/s, 1 eV = 1.6 × 10⁻¹⁹ J)",
        [
         "1.24 eV",
         "12.4 eV",
         "1.24 × 10⁻³ eV",
         "1.24 × 10³ eV"
        ],
        3,
        "E = hc/λ = 6.63 × 10⁻³⁴ × 3 × 10⁸/10⁻⁹ = 1.99 × 10⁻¹⁶ J, which is 1.24 × 10³ eV. (NCERT Exercise 8.9)",
        "Divide the energy in joules by 1.6 × 10⁻¹⁹."
       ],
       [
        "A student says: “Gamma rays come from the nucleus, which is bigger than an atom, so they have longer wavelengths than X-rays.” What is the error?",
        [
         "The nucleus is far smaller than an atom, and gamma rays have shorter wavelengths than X-rays",
         "Gamma rays come from inner-shell electrons, not the nucleus",
         "Gamma rays have the same wavelength as radio waves",
         "Gamma rays travel faster than X-rays in vacuum"
        ],
        0,
        "Radiation wavelength is correlated with the size of the source: gamma rays (about 10⁻¹⁴ m) come from the tiny nucleus, X-rays from heavy atoms. Their speed in vacuum is the same."
       ]
      ]
     ]
    },
    {
     "n": 9,
     "t": "Ray Optics and Optical Instruments",
     "levels": [
      [
       [
        "A candle is placed 27 cm in front of a concave mirror of radius of curvature 36 cm. Where must a screen be placed to get a sharp image?",
        [
         "13.5 cm in front of the mirror",
         "54 cm behind the mirror",
         "18 cm in front of the mirror",
         "54 cm in front of the mirror"
        ],
        3,
        "f = R/2 = −18 cm, so 1/v = 1/f − 1/u = −1/18 + 1/27 = −1/54 and v = −54 cm. The image is real, inverted and magnified (m = −2). (NCERT Exercise 9.1)",
        "Use 1/v + 1/u = 1/f with f = −18 cm and u = −27 cm."
       ],
       [
        "A 4.5 cm needle is placed 12 cm from a convex mirror of focal length 15 cm. The image distance and magnification are:",
        [
         "+6.7 cm, m = +0.56",
         "−6.7 cm, m = −0.56",
         "+60 cm, m = +5",
         "+3.3 cm, m = +0.28"
        ],
        0,
        "For a convex mirror f = +15 cm, so 1/v = 1/15 + 1/12 = 9/60 and v = +6.7 cm. m = −v/u = +0.56: a virtual, erect, diminished image. (NCERT Exercise 9.2)"
       ],
       [
        "The real depth of a tank of water is 12.5 cm and a microscope shows the apparent depth as 9.4 cm. The refractive index of water is:",
        [
         "1.50",
         "1.33",
         "0.75",
         "1.17"
        ],
        1,
        "For near-normal viewing, n = real depth/apparent depth = 12.5/9.4 = 1.33. (NCERT Exercise 9.3)"
       ],
       [
        "Total internal reflection can occur only when light travels:",
        [
         "From a rarer to a denser medium, at any angle",
         "From a denser to a rarer medium, at an angle greater than the critical angle",
         "From a denser to a rarer medium, at normal incidence",
         "From a rarer to a denser medium, at an angle greater than the critical angle"
        ],
        1,
        "TIR needs light going from the denser to the rarer medium with the angle of incidence above the critical angle ic, where sin ic = n_rarer/n_denser."
       ],
       [
        "A double-convex lens of focal length 20 cm is made from glass of refractive index 1.55, with both faces of the same radius. The radius of curvature is:",
        [
         "11 cm",
         "20 cm",
         "44 cm",
         "22 cm"
        ],
        3,
        "With R₁ = R and R₂ = −R, 1/f = (n − 1)(2/R), so R = 2(n − 1)f = 2 × 0.55 × 20 = 22 cm. (NCERT Exercise 9.7)"
       ],
       [
        "A convex lens of focal length 30 cm is in contact with a concave lens of focal length 20 cm. The combination is:",
        [
         "Converging, f = +12 cm",
         "Diverging, f = −60 cm",
         "Converging, f = +60 cm",
         "Diverging, f = −12 cm"
        ],
        1,
        "1/f = 1/30 − 1/20 = −1/60, so f = −60 cm and the system is diverging. (NCERT Exercise 9.10)",
        "Add the powers: P = P₁ + P₂."
       ],
       [
        "An optician prescribes a lens of power −4.0 D. This is:",
        [
         "A convex lens of focal length 25 cm",
         "A concave lens of focal length −25 cm",
         "A concave lens of focal length −4 cm",
         "A convex lens of focal length 4 cm"
        ],
        1,
        "f = 1/P = 1/(−4.0 D) = −0.25 m = −25 cm. Negative power means a diverging (concave) lens."
       ],
       [
        "A prism of refracting angle 60° has an angle of minimum deviation of 40°. The refractive index of its material is:",
        [
         "1.33",
         "1.41",
         "1.53",
         "1.73"
        ],
        2,
        "n = sin[(A + D_m)/2]/sin(A/2) = sin 50°/sin 30° = 0.766/0.5 = 1.53. (NCERT Exercise 9.6)"
       ],
       [
        "A telescope has an objective of focal length 144 cm and an eyepiece of focal length 6.0 cm. In normal adjustment, its magnifying power and the distance between the lenses are:",
        [
         "864, 150 cm",
         "24, 138 cm",
         "0.04, 150 cm",
         "24, 150 cm"
        ],
        3,
        "m = f_o/f_e = 144/6 = 24 and the tube length is f_o + f_e = 150 cm. (NCERT Exercise 9.13)"
       ],
       [
        "For a compound microscope with the final image at infinity, the magnifying power is approximately (L = tube length, D = 25 cm):",
        [
         "f_o/f_e",
         "(L/f_e)(D/f_o)",
         "(L/f_o)(D/f_e)",
         "1 + D/f_e"
        ],
        2,
        "The objective gives m_o = L/f_o and the eyepiece gives m_e = D/f_e, so m ≈ (L/f_o)(D/f_e). Both focal lengths should therefore be small."
       ],
       [
        "Light is an electromagnetic wave of wavelength about 400 nm to 750 nm, yet it appears to travel in straight lines. This is because:",
        [
         "its speed is very large",
         "its wavelength is larger than the size of the objects it meets",
         "its wavelength is very small compared with the size of the ordinary objects it meets",
         "light is not a wave at all in the ray picture"
        ],
        2,
        "When the wavelength is much smaller than the objects (a few cm or larger), a light wave can be treated as travelling along a straight line, called a ray."
       ],
       [
        "For reflection at a spherical mirror, the normal at the point of incidence is along:",
        [
         "the line joining the point of incidence to the centre of curvature",
         "the line joining the point of incidence to the pole",
         "the principal axis",
         "the tangent to the surface at that point"
        ],
        0,
        "The normal to a spherical surface at any point lies along the radius, that is, the line from the centre of curvature to that point."
       ],
       [
        "In the Cartesian sign convention, a real object is placed in front of a convex mirror. The signs of the object distance u and the focal length f are:",
        [
         "u negative, f negative",
         "u positive, f negative",
         "u positive, f positive",
         "u negative, f positive"
        ],
        3,
        "Distances measured against the incident light are negative, so u is negative for a real object. A convex mirror has f positive and a concave mirror has f negative."
       ],
       [
        "A parallel beam of paraxial rays, inclined slightly to the principal axis, falls on a concave mirror of radius 40 cm. The reflected rays converge at:",
        [
         "the principal focus on the axis, 40 cm from the pole",
         "a point in the focal plane, 20 cm from the pole but off the axis",
         "the centre of curvature",
         "infinity"
        ],
        1,
        "Since f = R/2 = 20 cm, an inclined parallel beam is brought to a point in the focal plane, the plane through F normal to the axis."
       ],
       [
        "A prism is to bend light by 90° using total internal reflection, which needs a critical angle below 45°. Which material can be used?",
        [
         "n = 1.33",
         "n = 1.36",
         "n = 1.52",
         "n = 1.31"
        ],
        2,
        "sin ic = 1/n must be below sin 45° = 0.707, so n > 1.41. Only n = 1.52 (crown glass, ic = 41.14°) qualifies."
       ],
       [
        "For an optical fibre to guide light by total internal reflection, the core and the cladding must satisfy:",
        [
         "core refractive index greater than cladding refractive index",
         "core refractive index less than cladding refractive index",
         "both have the same refractive index",
         "the cladding must be opaque"
        ],
        0,
        "Light must travel from the denser core to the rarer cladding and strike the boundary beyond the critical angle each time, so the core needs the higher index."
       ],
       [
        "A point source in air is 30 cm from a convex spherical glass surface (n = 1.5) of radius of curvature 20 cm. The image is formed at:",
        [
         "+180 cm, real, beyond the surface",
         "−90 cm, virtual",
         "+60 cm, real",
         "−180 cm, virtual, on the source side"
        ],
        3,
        "n₂/v − n₁/u = (n₂ − n₁)/R gives 1.5/v + 1/30 = 0.5/20, so 1.5/v = −1/120 and v = −180 cm.",
        "Use n₁ = 1, n₂ = 1.5, u = −30 cm, R = +20 cm."
       ],
       [
        "A convex lens of focal length 5 cm is used as a simple magnifier with the final image at infinity. Its magnifying power (D = 25 cm) is:",
        [
         "6",
         "5",
         "0.2",
         "125"
        ],
        1,
        "For the image at infinity, m = D/f = 25/5 = 5. For the image at the near point it would be 1 + D/f = 6."
       ]
      ],
      [
       [
        "A small bulb is at the bottom of a tank with 80 cm of water (n = 1.33). The area of the water surface through which light can emerge is about:",
        [
         "2.0 m²",
         "2.6 m²",
         "1.3 m²",
         "5.2 m²"
        ],
        1,
        "sin ic = 1/1.33 gives ic = 48.75°, so the light escapes through a circle of radius r = h tan ic ≈ 80 × 1.14 = 91 cm. Area = πr² ≈ 2.6 m². (NCERT Exercise 9.5)",
        "Light beyond the critical angle is totally reflected."
       ],
       [
        "An object and a screen are 90 cm apart. A convex lens forms a sharp image at two positions 20 cm apart. The focal length of the lens is:",
        [
         "22.5 cm",
         "20 cm",
         "21.4 cm",
         "45 cm"
        ],
        2,
        "The two positions swap u and v, so v − u = 20 and u + v = 90 give u = 35 cm and v = 55 cm. Then f = uv/(u + v) = 35 × 55/90 = 21.4 cm. (NCERT Exercise 9.19)"
       ],
       [
        "A convex glass lens (n = 1.5) has focal length 20 cm in air. Its focal length in water (n = 1.33) is about:",
        [
         "20 cm",
         "40 cm",
         "13 cm",
         "78 cm"
        ],
        3,
        "In air, 1/20 = 0.5(1/R₁ − 1/R₂), so (1/R₁ − 1/R₂) = 0.1 cm⁻¹. In water, 1.33/f = (1.5 − 1.33)(0.1), giving f = 78 cm. (NCERT Example 9.7)"
       ],
       [
        "A beam converges to a point P. A concave lens of focal length 16 cm is placed 12 cm before P. The beam now converges at a point:",
        [
         "7.5 cm from the lens",
         "12 cm from the lens",
         "48 cm from the lens (far side)",
         "28 cm from the lens"
        ],
        2,
        "P acts as a virtual object, so u = +12 cm and 1/v = 1/f + 1/u = −1/16 + 1/12 = 1/48, giving v = +48 cm. (NCERT Exercise 9.8)",
        "A converging beam gives a virtual object, so u is positive."
       ],
       [
        "In a compound microscope the objective has f = 2.0 cm and the eyepiece has f = 6.25 cm, 15 cm apart. For the final image at 25 cm, the object distance and the magnifying power are:",
        [
         "2.5 cm; 20",
         "2.5 cm; 4",
         "2.0 cm; 20",
         "3.3 cm; 13.5"
        ],
        0,
        "The eyepiece (v = −25, f = 6.25) gives u = −5 cm, so the first image is 15 − 5 = 10 cm from the objective. Then 1/u = 1/10 − 1/2 gives u = −2.5 cm and m = (10/2.5)(1 + 25/6.25) = 20. (NCERT Exercise 9.11)"
       ],
       [
        "A refracting telescope has an objective of focal length 15 m. The Moon (diameter 3.48 × 10⁶ m, orbit radius 3.8 × 10⁸ m) is viewed. The diameter of the image formed by the objective is:",
        [
         "1.37 cm",
         "9.2 cm",
         "27.5 cm",
         "13.7 cm"
        ],
        3,
        "The Moon subtends 3.48 × 10⁶/3.8 × 10⁸ = 9.16 × 10⁻³ rad. The image in the focal plane is f_o × angle = 15 × 9.16 × 10⁻³ ≈ 0.137 m. (NCERT Exercise 9.14)"
       ],
       [
        "Assertion (A): The image formed by a convex mirror is always virtual and diminished.\nReason (R): A convex mirror has a negative focal length.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "For a convex mirror 1/v = 1/f − 1/u is always positive, so the image is virtual and diminished. But in the Cartesian convention f is positive for a convex mirror, so R is false. (NCERT Exercise 9.15)"
       ],
       [
        "A student uses f = +7.5 cm for a concave mirror (R = 15 cm) with an object 5 cm in front and gets v = +3 cm. What is wrong?",
        [
         "f must be −7.5 cm for a concave mirror. The correct result is v = +15 cm, a virtual, magnified image",
         "u should have been taken as +5 cm",
         "The mirror equation does not work for virtual images",
         "Nothing. v = +3 cm is correct"
        ],
        0,
        "With f = −7.5 and u = −5, 1/v = −1/7.5 + 1/5 = 1/15, so v = +15 cm behind the mirror. (NCERT Example 9.3)"
       ],
       [
        "A light pipe has a glass core (n = 1.68) and an outer covering (n = 1.44). Total internal reflection at the wall occurs for rays entering the end face with angles to the axis up to:",
        [
         "30°",
         "60°",
         "36°",
         "90°"
        ],
        1,
        "At the end face sin i = 1.68 sin r, and TIR at the wall needs cos r ≥ 1.44/1.68. Hence sin i ≤ √(1.68² − 1.44²) = 0.865, so i ≤ 60°. (NCERT Exercise 9.17)"
       ],
       [
        "A plane mirror on a galvanometer coil turns through 3.5°. The reflected spot on a screen 1.5 m away moves by about:",
        [
         "9.2 cm",
         "6.5 cm",
         "18.4 cm",
         "36.8 cm"
        ],
        2,
        "Turning a mirror by θ turns the reflected ray by 2θ = 7°. The spot moves 1.5 × tan 7° ≈ 0.18 m. (NCERT Exercise 9.30)"
       ],
       [
        "A coin lies on a table and is viewed from directly above. A glass slab (n = 1.5) of thickness 12 cm is placed over the coin. By what distance does the coin appear to be raised?",
        [
         "8 cm",
         "4 cm",
         "6 cm",
         "18 cm"
        ],
        1,
        "The slab’s apparent thickness is t/n = 8 cm, so the coin appears raised by t − t/n = 12 − 8 = 4 cm.",
        "Apparent depth = real depth/n for near-normal viewing."
       ],
       [
        "Assertion (A): A liquid of greater mass density than water is always optically denser than water.\nReason (R): Optical density is a measure of the ratio of the speeds of light in two media.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "Optical density depends on the speed of light in the medium, not on mass density; turpentine is lighter than water but optically denser. So A is false and R is true."
       ],
       [
        "A light wave has frequency 5 × 10¹⁴ Hz in vacuum. Which statement about its wavelength and the use of the ray picture is correct?",
        [
         "λ = 1.67 µm; the ray picture works for obstacles of any size",
         "λ = 600 nm; the ray picture works best when obstacles are comparable to 600 nm",
         "λ = 600 nm; the ray picture works when obstacles are a few cm or larger",
         "λ = 60 nm; the ray picture works for obstacles of a few cm"
        ],
        2,
        "λ = c/ν = 3 × 10⁸/5 × 10¹⁴ = 6 × 10⁻⁷ m = 600 nm. Rays are a good description when the objects are much larger than this, such as a few cm."
       ],
       [
        "A concave mirror has R = 40 cm. An upright object 3 cm tall is placed 30 cm in front of it. In the Cartesian convention, the image height is:",
        [
         "+1.2 cm, erect, above the axis",
         "−1.2 cm, inverted, below the axis",
         "+6 cm, erect, above the axis",
         "−6 cm, inverted, below the axis"
        ],
        3,
        "f = −20 cm and u = −30 cm give 1/v = −1/20 + 1/30, so v = −60 cm. m = −v/u = −2 and h′ = −6 cm, a real inverted image below the axis.",
        "Heights above the axis are positive and below are negative."
       ],
       [
        "A point source in air is 60 cm from a convex spherical surface of a transparent material (n = 2.0) with radius of curvature 20 cm. The image is formed at:",
        [
         "+30 cm",
         "+120 cm",
         "+60 cm, on the far side of the surface",
         "−60 cm, virtual, on the source side"
        ],
        2,
        "2.0/v − 1/(−60) = (2.0 − 1)/20, so 2/v = 1/20 − 1/60 = 1/30 and v = +60 cm.",
        "Use n₂/v − n₁/u = (n₂ − n₁)/R with u = −60 cm and R = +20 cm."
       ],
       [
        "A converging lens has power +5 D. A ray parallel to the principal axis strikes it 2 cm from the optical centre. The tangent of the angle through which the ray is bent towards the axis is:",
        [
         "0.01",
         "0.10",
         "0.40",
         "10"
        ],
        1,
        "Power is the tangent of the bending angle for a ray at unit distance, so tan δ = P × h = 5 D × 0.02 m = 0.10.",
        "Convert the height to metres."
       ],
       [
        "Two thin lenses of powers +5 D and −2 D are in contact. An object is placed 50 cm in front of the combination. The image distance and the magnification are:",
        [
         "v = +100 cm, m = −2",
         "v = +100 cm, m = +2",
         "v = +20 cm, m = −0.4",
         "v = −100 cm, m = +2"
        ],
        0,
        "P = 5 − 2 = +3 D, so f = 33.3 cm. Then 1/v = 1/f + 1/u = 0.03 − 0.02 = 0.01 cm⁻¹, giving v = +100 cm and m = v/u = −2.",
        "Add the powers first, then use the lens formula with u = −50 cm."
       ],
       [
        "Assertion (A): Two thin lenses in contact have a net power P = P₁ + P₂.\nReason (R): The total magnification of the combination is m = m₁ m₂.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        1,
        "Both statements are true, but the powers add because 1/f = 1/f₁ + 1/f₂ follows from adding the lens equations, not because magnifications multiply."
       ],
       [
        "An equilateral prism (A = 60°) is made of a material of refractive index √2. The angle of minimum deviation is:",
        [
         "45°",
         "15°",
         "30°",
         "60°"
        ],
        2,
        "n = sin[(A + Dm)/2]/sin(A/2) gives sin[(60° + Dm)/2] = √2 × 0.5 = 0.707, so (60° + Dm)/2 = 45° and Dm = 30°."
       ],
       [
        "A student finds the minimum deviation for A = 60°, n = 1.5. She writes: at minimum deviation r₁ = r₂ = 30°, sin i = 1.5 sin 30° = 0.75, so i = e = 48.6° and Dm = i + e = 97.2°. What is wrong?",
        [
         "Snell’s law should be sin r = 1.5 sin i, so i = 19.5°",
         "At minimum deviation r₁ = A, not A/2",
         "The deviation is d = i + e − A, so Dm ≈ 37.2°",
         "Nothing is wrong, Dm = i + e"
        ],
        2,
        "The total deviation is d = (i − r₁) + (e − r₂) = i + e − A, so Dm = 2 × 48.6° − 60° ≈ 37.2°."
       ],
       [
        "A thin prism of refracting angle 4° is made of glass of refractive index 1.5 and is placed in water of refractive index 1.33. The angle of deviation is about:",
        [
         "2.0°",
         "0.13°",
         "1.0°",
         "0.51°"
        ],
        3,
        "n₂₁ = 1.5/1.33 = 1.128, so D = (n₂₁ − 1)A = 0.128 × 4° ≈ 0.51°. In air it would be 2°."
       ],
       [
        "Assertion (A): A simple magnifier gives an angular magnification greater than 1, although the image it forms subtends the same angle at the eye as the object at that position.\nReason (R): The angular magnification compares the image with the object kept at the near point, and the lens lets the object be brought closer than the near point.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Without the lens the object cannot be clearly seen closer than D = 25 cm, so its angle is small. With the lens the object sits near f, subtending a larger angle, giving m = D/f."
       ]
      ]
     ]
    },
    {
     "n": 10,
     "t": "Wave Optics",
     "levels": [
      [
       [
        "Monochromatic light of wavelength 589 nm passes from air into water (n = 1.33). Its wavelength in water is:",
        [
         "589 nm",
         "443 nm",
         "783 nm",
         "330 nm"
        ],
        1,
        "The frequency stays the same, so λ = λ₀/n = 589/1.33 = 443 nm. (NCERT Exercise 10.1)"
       ],
       [
        "The refractive index of glass is 1.5. The speed of light in glass is:",
        [
         "2.0 × 10⁸ m s⁻¹",
         "4.5 × 10⁸ m s⁻¹",
         "3.0 × 10⁸ m s⁻¹",
         "1.5 × 10⁸ m s⁻¹"
        ],
        0,
        "v = c/n = 3.0 × 10⁸/1.5 = 2.0 × 10⁸ m/s. (NCERT Exercise 10.3)"
       ],
       [
        "The portion of a wavefront from a distant star intercepted by the Earth is:",
        [
         "Spherical",
         "Cylindrical",
         "Elliptical",
         "Plane"
        ],
        3,
        "A very small part of a huge sphere is almost flat, so the wavefront from a distant source is plane. (NCERT Exercise 10.2)"
       ],
       [
        "The wave theory predicts that if light bends towards the normal on refraction, its speed in the second medium is:",
        [
         "Greater than in the first medium",
         "Equal to that in the first medium",
         "Zero",
         "Less than in the first medium"
        ],
        3,
        "From Huygens’ construction sin i/sin r = v₁/v₂, so r < i means v₂ < v₁. Foucault’s experiment confirmed this and ruled out the corpuscular prediction."
       ],
       [
        "In Young’s experiment the slits are 0.28 mm apart and the screen is 1.4 m away. The fourth bright fringe is 1.2 cm from the centre. The wavelength is:",
        [
         "300 nm",
         "450 nm",
         "600 nm",
         "1200 nm"
        ],
        2,
        "x_n = nλD/d, so λ = x₄d/(4D) = (1.2 × 10⁻²)(0.28 × 10⁻³)/(4 × 1.4) = 6.0 × 10⁻⁷ m. (NCERT Exercise 10.4)"
       ],
       [
        "Why do two separate sodium lamps not produce interference fringes on a wall?",
        [
         "Their light travels at different speeds",
         "They are not coherent: their phase difference changes randomly",
         "Sodium light is not a wave",
         "Their intensities are too low"
        ],
        1,
        "Ordinary sources change phase abruptly in about 10⁻¹⁰ s, so two lamps have no fixed phase relation and their intensities simply add."
       ],
       [
        "Two coherent sources each produce intensity I₀ at a point. At a point of constructive interference the intensity is:",
        [
         "2I₀",
         "I₀",
         "4I₀",
         "I₀/2"
        ],
        2,
        "The amplitudes add to 2a, so I ∝ (2a)² = 4I₀. Incoherent sources would give only 2I₀."
       ],
       [
        "In single-slit diffraction (slit width a), the minima occur at angles:",
        [
         "θ = (n + ½)λ/a",
         "θ = nλ/2a",
         "θ = nλa",
         "θ = nλ/a, n = ±1, ±2, …"
        ],
        3,
        "The zero-intensity points are at θ = nλ/a. The weak secondary maxima lie roughly midway, at (n + ½)λ/a."
       ],
       [
        "Unpolarised light of intensity I₀ passes through a single polaroid. The transmitted intensity is:",
        [
         "I₀",
         "I₀/2",
         "I₀/4",
         "Zero"
        ],
        1,
        "A polaroid passes only one component of the electric vector, so half the intensity is transmitted. Rotating it makes no difference."
       ],
       [
        "Polarised light of intensity I₀ falls on a polaroid whose pass-axis makes 60° with the direction of polarisation. The transmitted intensity is:",
        [
         "I₀/4",
         "I₀/2",
         "3I₀/4",
         "I₀/8"
        ],
        0,
        "Malus’ law gives I = I₀cos²θ = I₀cos²60° = I₀/4."
       ],
       [
        "Maxwell concluded that light is an electromagnetic wave because:",
        [
         "Light can travel through vacuum",
         "Waves need no medium to propagate",
         "The speed he calculated for electromagnetic waves in free space was very close to the measured speed of light",
         "Hertz had produced radio waves in the laboratory"
        ],
        2,
        "From his equations Maxwell derived a wave equation whose free-space speed matched the measured speed of light, so he proposed that light is an electromagnetic wave."
       ],
       [
        "A wavefront is defined as:",
        [
         "A line along which energy travels",
         "A surface of constant phase",
         "A straight line drawn along the path of a ray",
         "A surface on which the intensity is zero"
        ],
        1,
        "All points on a wavefront oscillate in phase. Energy travels perpendicular to the wavefront."
       ],
       [
        "Huygens explained the absence of a backward wave by assuming that the amplitude of the secondary wavelets is:",
        [
         "The same in all directions",
         "Zero in the forward direction and maximum in the backward direction",
         "Zero in all directions",
         "Maximum in the forward direction and zero in the backward direction"
        ],
        3,
        "This was an ad hoc assumption; the absence of the backwave is really justified by more rigorous wave theory."
       ],
       [
        "Light travels from glass (n = 1.5) into air. The critical angle for total internal reflection at the glass–air boundary is about:",
        [
         "33.7°",
         "41.8°",
         "48.2°",
         "56.3°"
        ],
        1,
        "sin i_c = n₂/n₁ = 1/1.5 = 0.667, so i_c ≈ 41.8°.",
        "Use sin i_c = n₂/n₁ with n₂ the rarer medium."
       ],
       [
        "Huygens’ construction for reflection of a plane wave gives AE = BC = vt, so triangles EAC and BAC are congruent. The result is:",
        [
         "r = 2i",
         "i + r = 90°",
         "sin i/sin r = v₁/v₂",
         "i = r"
        ],
        3,
        "Congruent triangles give equal angles of incidence and reflection, which is the law of reflection."
       ],
       [
        "A plane wavefront passes through a thin glass prism. The emerging wavefront is tilted because:",
        [
         "The part passing through the thickest glass is delayed the most",
         "The part passing through the thickest glass travels faster",
         "The frequency of light changes inside glass",
         "Glass absorbs one edge of the wavefront"
        ],
        0,
        "Light is slower in glass, so the part that crosses the greatest thickness lags most and the wavefront tilts."
       ],
       [
        "Two coherent sources vibrate in phase. At a point where the path difference is 2.5λ, the phase difference and the result are:",
        [
         "2.5π, destructive",
         "5π, destructive",
         "5π, constructive",
         "2.5π, constructive"
        ],
        1,
        "A path difference of λ corresponds to 2π, so 2.5λ gives 5π, an odd multiple of π. The waves cancel."
       ],
       [
        "Two coherent sources each give intensity I₀ at a point where their phase difference is π/2. The resultant intensity is:",
        [
         "I₀",
         "0",
         "4I₀",
         "2I₀"
        ],
        3,
        "I = 4I₀cos²(φ/2) = 4I₀cos²(π/4) = 2I₀."
       ],
       [
        "In Young’s experiment the two sources S₁ and S₂ are made coherent by:",
        [
         "Using a very bright lamp behind each slit",
         "Placing the two slits far apart",
         "Illuminating both from a single pinhole S, so any phase change in S appears equally in both",
         "Using two sodium lamps of the same colour"
        ],
        2,
        "Light from S₁ and S₂ comes from the same source, so their phases are locked together."
       ],
       [
        "If the width of a single slit is reduced, the central maximum of its diffraction pattern becomes:",
        [
         "Narrower",
         "Broader",
         "Unchanged in width but dimmer",
         "Absent"
        ],
        1,
        "The first minima are at θ ≈ λ/a, so a smaller a gives a larger angle and a broader pattern."
       ],
       [
        "A bulb filament is viewed through a slit made between two razor blades, first with a red filter and then with a blue filter. The fringes are:",
        [
         "Of the same width in both",
         "Wider for blue, because it has higher frequency",
         "Narrower for red",
         "Wider for red, because its wavelength is larger"
        ],
        3,
        "Band positions depend on wavelength (θ ≈ nλ/a), and red has the longer wavelength."
       ],
       [
        "Polarisation cannot be shown by sound waves in air because they are:",
        [
         "Too slow",
         "Of low frequency",
         "Longitudinal",
         "Absorbed by air"
        ],
        2,
        "Polarisation is special to transverse waves such as light; a longitudinal wave has no direction perpendicular to its motion to restrict."
       ]
      ],
      [
       [
        "In Young’s experiment the intensity at a point where the path difference is λ is K. The intensity where the path difference is λ/3 is:",
        [
         "K/2",
         "K/3",
         "K/4",
         "3K/4"
        ],
        2,
        "At path difference λ, φ = 2π and I = 4I₀cos²(φ/2) = 4I₀ = K. At λ/3, φ = 2π/3, so I = 4I₀cos²(π/3) = I₀ = K/4. (NCERT Exercise 10.5)"
       ],
       [
        "In Young’s experiment (d = 2 mm, D = 1.2 m) light of wavelengths 650 nm and 520 nm is used together. The least distance from the central maximum where bright fringes of both coincide is:",
        [
         "1.17 mm",
         "1.56 mm",
         "0.78 mm",
         "3.12 mm"
        ],
        1,
        "We need 650n₁ = 520n₂. The smallest integers give 4 × 650 = 5 × 520 = 2600 nm, so x = 2600 × 10⁻⁹ × 1.2/(2 × 10⁻³) = 1.56 mm. (Adapted from NCERT Exercise 10.6)"
       ],
       [
        "Two polaroids are crossed. A third is placed between them with its axis at 45° to both. If I₀ is the intensity after the first polaroid, the intensity after the third is:",
        [
         "I₀/2",
         "I₀/8",
         "Zero",
         "I₀/4"
        ],
        3,
        "I = I₀cos²45° · cos²45° = I₀/4. This is the maximum the middle polaroid can allow. (NCERT Example 10.2)"
       ],
       [
        "A single slit of width 0.2 mm is lit by light of wavelength 600 nm. On a screen 2 m away, the central bright band is about:",
        [
         "6 mm wide",
         "12 mm wide",
         "3 mm wide",
         "24 mm wide"
        ],
        1,
        "The first minima are at θ ≈ λ/a, so y = λD/a = (600 × 10⁻⁹)(2)/(0.2 × 10⁻³) = 6 mm on each side. The central maximum is 12 mm wide.",
        "Count the distance between the two first minima."
       ],
       [
        "Assertion (A): When light enters glass from air, its frequency decreases.\nReason (R): The speed of light in glass is less than in air.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "The frequency is fixed by the source and does not change on refraction. The speed and wavelength decrease, so R is true and A is false."
       ],
       [
        "A student says: “Two separate sodium lamps, each of intensity I₀, give 4I₀ where their waves meet in phase.” What is wrong?",
        [
         "Nothing is wrong",
         "The intensity should be 3I₀",
         "The lamps are incoherent, so the intensities add to 2I₀ and no stable fringes form",
         "The intensity should be I₀/2"
        ],
        2,
        "Independent sources have no fixed phase relation, so there is no interference term and the intensities simply add."
       ],
       [
        "A plane wavefront becomes spherical and converges after passing through a thin convex lens because:",
        [
         "The edge of the wave travels faster in air",
         "The lens absorbs the edges of the wave",
         "The wave frequency changes inside the lens",
         "The central part passes through the thickest glass and is delayed the most"
        ],
        3,
        "Light is slower in glass, so the middle of the wavefront lags most and the emerging front curves inwards towards the focus."
       ],
       [
        "Light travels from air into a medium where its speed is 2.0 × 10⁸ m/s. For an angle of incidence of 30°, the angle of refraction is about:",
        [
         "30°",
         "45°",
         "48.6°",
         "19.5°"
        ],
        3,
        "sin i/sin r = v₁/v₂ = 3.0/2.0 = 1.5, so sin r = 0.5/1.5 = 1/3 and r ≈ 19.5°. The ray bends towards the normal."
       ],
       [
        "Young’s double-slit apparatus is moved from air into water (n = 1.33) without any other change. The fringe spacing β becomes:",
        [
         "1.33β",
         "β",
         "β/1.33",
         "β/1.33²"
        ],
        2,
        "The frequency is unchanged but the wavelength falls to λ/n. Since the spacing is proportional to λ, it becomes β/1.33."
       ],
       [
        "In Young’s experiment d = 0.5 mm, D = 1 m and λ = 500 nm. The fifth dark fringe (counting the first dark fringe as n = 0) is at:",
        [
         "5.0 mm",
         "5.5 mm",
         "4.5 mm",
         "2.5 mm"
        ],
        2,
        "Dark fringes lie at x = (n + ½)λD/d. The fifth is n = 4: x = 4.5 × (500 × 10⁻⁹)(1)/(0.5 × 10⁻³) = 4.5 mm."
       ],
       [
        "Assertion (A): In everyday situations light appears to travel in straight lines.\nReason (R): Maxwell showed that light is an electromagnetic wave.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        1,
        "Light seems to travel in straight lines because its wavelength is tiny compared with the size of ordinary objects, not because of Maxwell’s theory. Both statements are true but R does not explain A."
       ],
       [
        "A point source in water (n = 1.33) has a spherical wavefront of radius 20 cm at t = 0. Using Huygens’ construction, the radius of the wavefront 1.0 ns later is about:",
        [
         "22.6 cm",
         "42.6 cm",
         "50.0 cm",
         "59.9 cm"
        ],
        1,
        "v = c/n = 2.26 × 10⁸ m/s, so vt = 22.6 cm and the new radius is 20 + 22.6 = 42.6 cm.",
        "Draw wavelets of radius vt, not ct."
       ],
       [
        "A student says: “Huygens’ principle gives a backward wavefront too, and Huygens removed it with a rigorous proof that the wavelets have zero amplitude backwards.” What is wrong?",
        [
         "Nothing is wrong; the proof is in Huygens’ Treatise on Light",
         "The backwave really exists in every medium",
         "Zero backward amplitude was an ad hoc assumption; only more rigorous wave theory justifies the absence of the backwave",
         "The wavelets are plane, not spherical, so there is no backwave"
        ],
        2,
        "Huygens simply assumed zero amplitude in the backward direction, which is not satisfactory by itself."
       ],
       [
        "A ray travels in glass (n = 1.5) and meets a glass–water (n = 1.33) boundary. The critical angle is about:",
        [
         "41.8°",
         "62.5°",
         "48.8°",
         "27.5°"
        ],
        1,
        "sin i_c = n₂/n₁ = 1.33/1.5 = 0.887, so i_c ≈ 62.5°. Using the glass–air value gives the wrong angle.",
        "The refracted ray grazes the surface when r = 90°."
       ],
       [
        "Assertion (A): When a plane wave goes from glass into air, it bends away from the normal.\nReason (R): The speed of light in air is greater than in glass.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "From sin i/sin r = v₁/v₂, if v₂ > v₁ then r > i. So the wave bends away from the normal because it speeds up."
       ],
       [
        "In a convex lens the central ray passes through 3 mm of glass (n = 1.5). Compared with travelling the same 3 mm in air, the extra time it takes is:",
        [
         "1 × 10⁻¹¹ s",
         "2.5 × 10⁻¹² s",
         "5 × 10⁻¹² s",
         "1.5 × 10⁻¹¹ s"
        ],
        2,
        "Extra time = (n − 1)t/c = 0.5 × 3 × 10⁻³/(3 × 10⁸) = 5 × 10⁻¹² s. This delay equals the extra travel time of edge rays in air, so all rays take equal time to the focus.",
        "Subtract the air time from the glass time."
       ],
       [
        "Two coherent sources vibrate in phase with equal amplitude a. The resultant amplitudes at points where the path differences are 3.5λ and 4λ are respectively:",
        [
         "0 and 2a",
         "2a and 0",
         "a and 2a",
         "0 and a"
        ],
        0,
        "3.5λ is (n + ½)λ with n = 3, giving destructive interference and amplitude 0. 4λ is a whole number of wavelengths, giving amplitude 2a."
       ],
       [
        "Assertion (A): Even though some points on the screen in an interference pattern get no light, energy is conserved.\nReason (R): Energy missing at the dark fringes appears at the bright fringes.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Interference redistributes light energy; the average over the pattern remains the same. R correctly explains A."
       ],
       [
        "In Young’s experiment d = 1 mm, D = 1 m and λ = 500 nm. On one side of the centre, the distance between the 5th bright fringe and the 2nd dark fringe (first dark fringe is n = 0) is:",
        [
         "1.25 mm",
         "1.50 mm",
         "2.25 mm",
         "1.75 mm"
        ],
        3,
        "β = λD/d = 0.5 mm. The 5th bright fringe is at 5β = 2.5 mm and the 2nd dark fringe at 1.5β = 0.75 mm, so the gap is 1.75 mm."
       ],
       [
        "A student says: “In Young’s experiment, halving the slit separation d halves the fringe width.” What is wrong?",
        [
         "β is independent of d",
         "Nothing is wrong",
         "β = λD/d, so halving d doubles the fringe width",
         "β ∝ 1/d², so it becomes four times larger"
        ],
        2,
        "Fringe spacing is inversely proportional to d, so the fringes move farther apart when the slits come closer."
       ],
       [
        "Light of wavelength 600 nm falls on a single slit and the first minimum is seen at 0.3° from the central axis. The slit width is about:",
        [
         "0.002 mm",
         "0.057 mm",
         "0.115 mm",
         "0.230 mm"
        ],
        2,
        "θ = 0.3° = 5.24 × 10⁻³ rad and θ ≈ λ/a, so a = 600 × 10⁻⁹/5.24 × 10⁻³ ≈ 0.115 mm.",
        "Convert degrees to radians first."
       ],
       [
        "A student says: “The pattern in Young’s double-slit experiment is purely interference between two sources, so all bright fringes are equally bright.” What is wrong?",
        [
         "Nothing is wrong",
         "Slits cannot cause diffraction",
         "Diffraction occurs only at the edges of the screen",
         "The pattern is a superposition of two-slit interference and single-slit diffraction from each slit, so brightness falls away from the centre"
        ],
        3,
        "Each slit also diffracts light, and the double-slit fringes sit inside the single-slit diffraction pattern."
       ],
       [
        "Through a slit of width 0.14 mm, a filament is viewed with a red (700 nm) filter and then a blue (400 nm) filter. The angular gap between the first minima of the two patterns on the same side is about:",
        [
         "5.0 × 10⁻³ rad",
         "2.9 × 10⁻³ rad",
         "7.9 × 10⁻³ rad",
         "2.1 × 10⁻³ rad"
        ],
        3,
        "θ = λ/a gives 5.0 × 10⁻³ rad for red and 2.86 × 10⁻³ rad for blue; the difference is 2.1 × 10⁻³ rad.",
        "Find each angle separately and subtract."
       ],
       [
        "Unpolarised light of intensity I₀ falls on polaroid P₁. Polaroid P₂ has its axis at 30° to P₁, and P₃ has its axis perpendicular to P₁. The intensity emerging from P₃ is:",
        [
         "3I₀/32",
         "3I₀/16",
         "I₀/8",
         "3I₀/8"
        ],
        0,
        "After P₁ the intensity is I₀/2. Then I = (I₀/2)cos²30° cos²60° = (I₀/2)(3/4)(1/4) = 3I₀/32.",
        "P₂ and P₃ axes differ by 60°."
       ],
       [
        "Assertion (A): Rotating a polaroid in the path of unpolarised light does not change the transmitted intensity.\nReason (R): Unpolarised light has its electric vector along one fixed direction in the transverse plane.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "The electric vector of unpolarised light takes all directions rapidly and randomly, so R is false. For this reason every orientation transmits half the intensity, and A is true."
       ],
       [
        "Light passes through polaroid P₂ and then through polaroid P₁. P₁ is rotated through one full turn (2π) about the beam. The number of positions where the transmitted intensity is (nearly) zero is:",
        [
         "1",
         "2",
         "4",
         "0"
        ],
        1,
        "I = I₀cos²θ is zero at θ = 90° and 270°, giving two minima (and two maxima) in each full turn."
       ],
       [
        "Assertion (A): The energy carried by a light wave falls when it enters a denser medium.\nReason (R): The speed of light is lower in a denser medium.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "The wave energy depends on the amplitude, not on the speed of propagation, so A is false. R is a true statement. (NCERT Example 10.1)"
       ]
      ]
     ]
    },
    {
     "n": 11,
     "t": "Dual Nature of Radiation and Matter",
     "levels": [
      [
       [
        "The photoelectric cut-off voltage in an experiment is 1.5 V. The maximum kinetic energy of the photoelectrons is:",
        [
         "3.0 eV",
         "6.0 eV",
         "0.75 eV",
         "1.5 eV"
        ],
        3,
        "K_max = eV₀ = 1.5 eV = 2.4 × 10⁻¹⁹ J. (NCERT Exercise 11.3)"
       ],
       [
        "The minimum energy needed by an electron to escape from a metal surface is called its:",
        [
         "Threshold frequency",
         "Work function",
         "Stopping potential",
         "Ionisation energy"
        ],
        1,
        "This minimum energy is the work function φ₀, usually measured in eV. The threshold frequency is φ₀/h."
       ],
       [
        "The intensity of light above the threshold frequency is increased, with the frequency kept fixed. This will:",
        [
         "Increase both the saturation current and the stopping potential",
         "Increase the stopping potential only",
         "Increase the saturation current but not the stopping potential",
         "Increase neither"
        ],
        2,
        "More photons per second free more electrons, so the saturation current rises. The maximum kinetic energy depends only on frequency, so V₀ is unchanged."
       ],
       [
        "No photoelectrons are emitted below the threshold frequency, however intense the light, because:",
        [
         "Each electron absorbs one photon, and hν < φ₀ is too little to free it",
         "The metal does not absorb such light",
         "Intense light only heats the metal",
         "Photons carry no momentum"
        ],
        0,
        "Einstein’s picture is one photon to one electron. If hν < φ₀ no electron can escape, whatever the number of photons."
       ],
       [
        "Light of frequency 6 × 10¹⁴ Hz falls on caesium (work function 2.14 eV). The maximum kinetic energy of the emitted electrons is:",
        [
         "2.49 eV",
         "0.35 eV",
         "2.14 eV",
         "4.63 eV"
        ],
        1,
        "hν = (6.63 × 10⁻³⁴)(6 × 10¹⁴)/(1.6 × 10⁻¹⁹) = 2.49 eV. K_max = 2.49 − 2.14 = 0.35 eV. (NCERT Exercise 11.2)"
       ],
       [
        "The work function of a metal is 4.2 eV. Will it emit photoelectrons for light of wavelength 330 nm?",
        [
         "No, the photon energy is about 3.77 eV, below 4.2 eV",
         "Yes, the photon energy is about 3.77 eV, above 4.2 eV",
         "Yes, because 330 nm is ultraviolet",
         "No, because the intensity is not given"
        ],
        0,
        "E = hc/λ = (6.63 × 10⁻³⁴ × 3 × 10⁸)/(330 × 10⁻⁹ × 1.6 × 10⁻¹⁹) ≈ 3.77 eV, which is less than φ₀. (NCERT Exercise 11.7)"
       ],
       [
        "Which property of a photon depends on the frequency of the light but not on its intensity?",
        [
         "The number of photons per second",
         "Its energy",
         "The photocurrent",
         "The saturation current"
        ],
        1,
        "Each photon has E = hν. Intensity only changes how many photons arrive per second."
       ],
       [
        "The de Broglie wavelength of a bullet of mass 0.040 kg moving at 1.0 km/s is:",
        [
         "1.7 × 10⁻³² m",
         "6.6 × 10⁻³⁴ m",
         "1.7 × 10⁻³⁵ m",
         "2.6 × 10⁻³⁸ m"
        ],
        2,
        "p = mv = 0.040 × 1000 = 40 kg m/s, so λ = h/p = 6.63 × 10⁻³⁴/40 = 1.7 × 10⁻³⁵ m. This is far too small to measure. (NCERT Exercise 11.10)"
       ],
       [
        "In a photoelectric experiment the slope of the graph of cut-off voltage against frequency is 4.12 × 10⁻¹⁵ V s. The value of Planck’s constant is:",
        [
         "4.1 × 10⁻¹⁵ J s",
         "6.6 × 10⁻³⁴ J s",
         "2.6 × 10⁻⁵ J s",
         "1.6 × 10⁻¹⁹ J s"
        ],
        1,
        "V₀ = (h/e)ν − φ₀/e, so the slope is h/e. Hence h = 4.12 × 10⁻¹⁵ × 1.6 × 10⁻¹⁹ = 6.6 × 10⁻³⁴ J s. (NCERT Exercise 11.5)"
       ],
       [
        "A photon of wavelength λ has momentum:",
        [
         "hλ",
         "hc/λ",
         "h/λ",
         "λ/h"
        ],
        2,
        "p = E/c = hν/c = h/λ. This equals the de Broglie wavelength relation applied to a photon. (NCERT Exercise 11.11)"
       ],
       [
        "J. J. Thomson found that the specific charge e/m of cathode ray particles stayed the same whatever the cathode metal or the gas in the tube. This suggested that:",
        [
         "The particles are a universal constituent of all matter",
         "The particles are different for each metal",
         "The particles are positively charged ions of the gas",
         "The particles travel at the speed of light"
        ],
        0,
        "Same e/m for every material means identical particles, which Thomson named electrons. He found their speeds to be only about 0.1 to 0.2 times c."
       ],
       [
        "Millikan’s oil-drop experiment showed that the charge on an oil droplet is always an integral multiple of 1.602 × 10⁻¹⁹ C. This established that:",
        [
         "The electron has no mass",
         "Electric charge is quantised",
         "Electric charge is continuous",
         "The charge of a droplet is always zero"
        ],
        1,
        "Charge comes only in whole-number multiples of the elementary charge e. With e/m known, the mass of the electron could then be found."
       ],
       [
        "A very strong electric field of the order of 10⁸ V m⁻¹ pulls electrons out of a metal, as in a spark plug. This process is called:",
        [
         "Thermionic emission",
         "Photoelectric emission",
         "Field emission",
         "Secondary emission"
        ],
        2,
        "Strong field pulls electrons out (field emission). Heating gives thermionic emission and light gives photoelectric emission."
       ],
       [
        "A metal has a work function of 4.0 eV. In joules this is:",
        [
         "2.5 × 10¹⁹ J",
         "6.4 × 10⁻²⁰ J",
         "4.0 × 10⁻¹⁹ J",
         "6.4 × 10⁻¹⁹ J"
        ],
        3,
        "1 eV = 1.6 × 10⁻¹⁹ J, so 4.0 eV = 4.0 × 1.6 × 10⁻¹⁹ = 6.4 × 10⁻¹⁹ J."
       ],
       [
        "Hertz noticed that sparks across his detector loop became stronger when ultraviolet light from an arc lamp fell on the emitter plate. We now understand that:",
        [
         "The ultraviolet light raised the voltage of the spark source",
         "Electrons near the surface absorbed enough energy from the light to escape the metal",
         "The metal ions were pulled out of the surface",
         "The ultraviolet light only heated the air in the gap"
        ],
        1,
        "Light helped free charged particles, now known to be electrons, to escape from the surface against the pull of the positive ions."
       ],
       [
        "In Hallwachs’ experiment an uncharged zinc plate becomes positively charged when ultraviolet light falls on it. The reason is that:",
        [
         "Negatively charged electrons leave the plate",
         "Positive ions leave the plate",
         "The plate absorbs positive charge from the air",
         "The light carries positive charge"
        ],
        0,
        "Loss of negative charge leaves the plate positive. The same idea explains why a negatively charged zinc plate loses its charge under ultraviolet light."
       ],
       [
        "Which of these metals is sensitive even to visible light, whereas the others respond only to ultraviolet?",
        [
         "Zinc",
         "Cadmium",
         "Caesium",
         "Magnesium"
        ],
        2,
        "Zinc, cadmium and magnesium need short-wavelength ultraviolet light. Alkali metals such as caesium respond even to visible light."
       ],
       [
        "In the photoelectric apparatus (emitter C, collector A), the commutator is used to:",
        [
         "Change the frequency of the light",
         "Change the intensity of the light",
         "Measure the photocurrent",
         "Reverse the polarity so A can be made positive or negative with respect to C"
        ],
        3,
        "A negative (retarding) A is needed to find the stopping potential. The commutator reverses the battery connections."
       ],
       [
        "In a photocell the frequency of light (above threshold) and the positive potential of A are fixed. At intensity I the photocurrent is 4 µA. When the intensity is tripled, the photocurrent will be about:",
        [
         "4 µA",
         "12 µA",
         "36 µA",
         "1.3 µA"
        ],
        1,
        "Photocurrent is directly proportional to intensity, so it becomes 3 × 4 = 12 µA."
       ],
       [
        "For a given photosensitive material, the graph of stopping potential V₀ against the frequency ν of the incident light is:",
        [
         "A straight line that cuts the frequency axis at the threshold frequency",
         "A straight line through the origin",
         "A parabola",
         "A horizontal line"
        ],
        0,
        "V₀ varies linearly with ν and becomes zero at ν₀. Below ν₀ there is no emission."
       ],
       [
        "Very dim light of frequency above the threshold frequency falls on a metal. Photoelectric emission:",
        [
         "Starts only after a delay of several seconds",
         "Starts after hours as electrons slowly gather energy",
         "Starts instantaneously, in about 10⁻⁹ s or less",
         "Does not occur because the light is dim"
        ],
        2,
        "Low intensity means fewer photons and hence fewer electrons per second, not a time lag."
       ],
       [
        "Which of these is a prediction of the wave theory of light that disagrees with the photoelectric experiments?",
        [
         "The photocurrent should increase with intensity",
         "The maximum kinetic energy of photoelectrons should increase with the intensity",
         "Light should carry energy",
         "Light should show interference"
        ],
        1,
        "A more intense wave has stronger fields and should give each electron more energy. The experiment shows K_max is independent of intensity."
       ],
       [
        "Photons are not deflected by electric or magnetic fields because they:",
        [
         "Have no energy",
         "Have no momentum",
         "Move at less than the speed of light",
         "Are electrically neutral"
        ],
        3,
        "Photons are neutral. They carry energy hν and momentum h/λ, and always move at speed c."
       ],
       [
        "In a collision between a photon and an electron, which statement is correct?",
        [
         "Total energy and total momentum are conserved, but the number of photons may change",
         "The number of photons is always conserved",
         "Only energy is conserved",
         "Neither energy nor momentum is conserved"
        ],
        0,
        "Energy and momentum are always conserved. A photon can be absorbed or a new one created."
       ],
       [
        "The de Broglie wavelength of an electron moving at 2.0 × 10⁶ m/s is about:",
        [
         "0.036 nm",
         "3.6 nm",
         "0.36 nm",
         "0.18 nm"
        ],
        2,
        "p = mv = 9.1 × 10⁻³¹ × 2.0 × 10⁶ = 1.82 × 10⁻²⁴ kg m/s. λ = h/p = 6.63 × 10⁻³⁴/1.82 × 10⁻²⁴ = 3.6 × 10⁻¹⁰ m."
       ],
       [
        "An electron and a proton move with the same speed. Which has the longer de Broglie wavelength?",
        [
         "The proton, because it is heavier",
         "The electron, because λ = h/mv and its mass is smaller",
         "Both have the same wavelength",
         "Neither shows any wave nature"
        ],
        1,
        "At equal speed λ ∝ 1/m, so the lighter particle has the longer wavelength."
       ]
      ],
      [
       [
        "The threshold frequency of a metal is 3.3 × 10¹⁴ Hz. Light of frequency 8.2 × 10¹⁴ Hz falls on it. The cut-off voltage is:",
        [
         "3.39 V",
         "1.36 V",
         "2.03 V",
         "4.9 V"
        ],
        2,
        "eV₀ = h(ν − ν₀) = (6.63 × 10⁻³⁴)(4.9 × 10¹⁴) = 3.25 × 10⁻¹⁹ J, so V₀ = 2.03 V. (NCERT Exercise 11.6)"
       ],
       [
        "Light of wavelength 488 nm gives a stopping potential of 0.38 V. The work function of the emitter is:",
        [
         "2.55 eV",
         "2.17 eV",
         "2.93 eV",
         "0.38 eV"
        ],
        1,
        "The photon energy is hc/λ = 2.55 eV, so φ₀ = 2.55 − 0.38 = 2.17 eV. (NCERT Exercise 11.9)"
       ],
       [
        "Light of frequency 7.21 × 10¹⁴ Hz ejects electrons with a maximum speed of 6.0 × 10⁵ m/s. The threshold frequency is:",
        [
         "2.5 × 10¹⁴ Hz",
         "7.2 × 10¹⁴ Hz",
         "9.5 × 10¹⁴ Hz",
         "4.7 × 10¹⁴ Hz"
        ],
        3,
        "K_max = ½mv² = 1.64 × 10⁻¹⁹ J and hν = 4.78 × 10⁻¹⁹ J, so φ₀ = 3.14 × 10⁻¹⁹ J and ν₀ = φ₀/h = 4.7 × 10¹⁴ Hz. (NCERT Exercise 11.8)"
       ],
       [
        "A helium-neon laser emits 9.42 mW at 632.8 nm. The number of photons emitted per second is about:",
        [
         "3.0 × 10¹⁹",
         "1.5 × 10¹⁶",
         "3.0 × 10¹⁶",
         "6.0 × 10¹⁶"
        ],
        2,
        "Each photon has E = hc/λ = 3.14 × 10⁻¹⁹ J. N = P/E = 9.42 × 10⁻³/3.14 × 10⁻¹⁹ = 3.0 × 10¹⁶ per second. (NCERT Exercise 11.4)"
       ],
       [
        "Assertion (A): The wave theory of light can explain the existence of a threshold frequency.\nReason (R): In the wave picture, electrons absorb energy continuously from the radiation.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "Continuous absorption means a bright enough beam would eventually free electrons at any frequency, so the wave theory predicts no threshold. A is false and R is true."
       ],
       [
        "A student says: “Light below the threshold frequency, shone for long enough, will eventually eject electrons as they slowly gain energy.” What is wrong?",
        [
         "An electron absorbs one photon at a time, so photons with hν < φ₀ can never free it however long the light shines",
         "Electrons absorb energy only from intense light",
         "The work function of a metal falls with time",
         "Nothing is wrong. Einstein’s theory predicts this too"
        ],
        0,
        "Energy cannot pile up across photons. Emission is a single-photon, instantaneous process (about 10⁻⁹ s or less)."
       ],
       [
        "An electron is accelerated from rest through 150 V. Its de Broglie wavelength is about:",
        [
         "0.012 nm",
         "1.0 nm",
         "0.0010 nm",
         "0.10 nm"
        ],
        3,
        "K = eV = 150 eV, so p = √(2mK) = 6.6 × 10⁻²⁴ kg m/s. Then λ = h/p = 0.10 nm, comparable to atomic spacing."
       ],
       [
        "An electron and a photon have the same wavelength. Which has the greater energy?",
        [
         "The photon",
         "The electron",
         "They have equal energy",
         "It cannot be determined"
        ],
        0,
        "The same λ means the same momentum p. Photon energy is pc, while electron kinetic energy is p²/2m = pv/2, which is smaller because v ≪ c."
       ],
       [
        "V₀–ν graphs of two metals A and B are drawn on the same axes. The work function of A is less than that of B. Which is true?",
        [
         "Parallel lines, and B cuts the frequency axis at a lower value",
         "Different slopes, and B is steeper",
         "Parallel lines, and A cuts the frequency axis at a lower value",
         "The two graphs are the same line"
        ],
        2,
        "The slope is h/e for every metal, so the lines are parallel. The intercept ν₀ = φ₀/h is lower for the metal with the smaller work function."
       ],
       [
        "Electrons accelerated through 30 kV strike a target and produce X-rays. The maximum frequency of the X-rays is:",
        [
         "7.2 × 10¹⁵ Hz",
         "7.2 × 10¹⁸ Hz",
         "4.1 × 10¹⁸ Hz",
         "3.0 × 10¹⁸ Hz"
        ],
        1,
        "The most energetic photon takes the whole electron energy: hν_max = eV = 30 keV. So ν_max = (1.6 × 10⁻¹⁹ × 3 × 10⁴)/(6.63 × 10⁻³⁴) = 7.2 × 10¹⁸ Hz. (NCERT Exercise 11.1)"
       ],
       [
        "In a Thomson-type experiment a beam of cathode ray particles passes undeflected through crossed fields E = 6.0 × 10⁴ V/m and B = 2.0 × 10⁻³ T. If the electric field is switched off, the beam moves in a circle of radius about (take e/m = 1.76 × 10¹¹ C/kg):",
        [
         "17 cm",
         "0.85 cm",
         "8.5 cm",
         "4.3 cm"
        ],
        2,
        "Undeflected means v = E/B = 3.0 × 10⁷ m/s (0.1c). With B alone r = mv/eB = v/[(e/m)B] = 3.0 × 10⁷/(1.76 × 10¹¹ × 2.0 × 10⁻³) = 0.085 m.",
        "Balance the electric and magnetic forces to get v first."
       ],
       [
        "Assertion (A): A droplet in Millikan’s oil-drop experiment can carry a charge of 2.4 × 10⁻¹⁹ C.\nReason (R): Electric charge is quantised, occurring in integral multiples of 1.602 × 10⁻¹⁹ C.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "2.4 × 10⁻¹⁹/1.602 × 10⁻¹⁹ ≈ 1.5 is not a whole number, so such a charge is not allowed. A is false and R is true."
       ],
       [
        "A student says: “Metals have free electrons, so electrons should leave the surface on their own without any energy supply.” What is wrong with this?",
        [
         "An escaping electron leaves a positive surface that pulls it back, so it needs at least the work function to escape",
         "Free electrons have no charge, so they cannot leave",
         "Electrons can escape only by photoelectric emission, never by heating",
         "The work function is the maximum energy an electron may gain"
        ],
        0,
        "The attraction of the ions holds the electron in. The minimum energy to pull it out is φ₀, supplied by heating, a strong field or light."
       ],
       [
        "Which statement about the origin of Hertz’s enhanced sparks under ultraviolet light is correct?",
        [
         "The ultraviolet light made the metal ions more mobile than the electrons",
         "Electrons near the metal surface absorbed energy from the light, overcame the attraction of the positive ions and escaped",
         "The ultraviolet light created extra voltage across the spark gap",
         "The metal surface emitted ultraviolet light of its own"
        ],
        1,
        "Hertz did not know of electrons then. The light freed charged particles from the surface, which enhanced the discharge."
       ],
       [
        "Three zinc plates, one negatively charged, one neutral and one positively charged, are illuminated by ultraviolet light. Their charges will respectively:",
        [
         "Stay the same, stay the same, stay the same",
         "Become more negative, become negative, become less positive",
         "Become less negative, become positive, become more positive",
         "Become less negative, stay neutral, become less positive"
        ],
        2,
        "In every case negative electrons leave. A negative plate loses charge, a neutral plate becomes positive and a positive plate gains more positive charge."
       ],
       [
        "Assertion (A): A negatively charged zinc plate loses its charge under ultraviolet light but not under visible light.\nReason (R): Emission occurs only if the frequency exceeds the threshold frequency, which for zinc lies in the ultraviolet.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Visible light has frequency below zinc’s threshold, so no electrons escape however intense it is. R correctly explains A."
       ],
       [
        "A student pairs the parts of the photocell experiment with the quantity varied. Which pairing is wrong?",
        [
         "Intensity of light is varied by changing the distance of the source",
         "Intensity of light is varied with a coloured filter",
         "Frequency of light is varied with coloured filters or glass",
         "Potential of A with respect to C is varied with the battery and commutator"
        ],
        1,
        "A filter selects the frequency. Intensity is changed by moving the source nearer to or farther from the emitter."
       ],
       [
        "A small lamp (point source, fixed frequency above threshold) at 20 cm from the emitter gives a saturation current of 8 µA. If the lamp is moved to 40 cm, the saturation current becomes about:",
        [
         "4 µA",
         "1 µA",
         "16 µA",
         "2 µA"
        ],
        3,
        "Intensity falls as 1/d², so it becomes 1/4. Saturation current is proportional to intensity, so 8/4 = 2 µA.",
        "Photon count per second on the plate falls as 1/d²."
       ],
       [
        "A laser of 2.0 mW emits light of frequency 6.0 × 10¹⁴ Hz onto a photocell. The saturation current is 4.0 µA. The percentage of incident photons that eject an electron is about:",
        [
         "0.5%",
         "5%",
         "0.05%",
         "50%"
        ],
        0,
        "Photons per second = 2.0 × 10⁻³/(6.63 × 10⁻³⁴ × 6.0 × 10¹⁴) = 5.0 × 10¹⁵. Electrons per second = 4.0 × 10⁻⁶/1.6 × 10⁻¹⁹ = 2.5 × 10¹³. Ratio = 0.5%.",
        "At saturation every emitted electron reaches the collector."
       ],
       [
        "Photoelectrons are stopped by a potential of 2.0 V. The maximum speed of the fastest photoelectrons is about:",
        [
         "5.9 × 10⁵ m/s",
         "8.4 × 10⁵ m/s",
         "1.2 × 10⁶ m/s",
         "7.0 × 10¹¹ m/s"
        ],
        1,
        "K_max = eV₀ = 2.0 eV = 3.2 × 10⁻¹⁹ J. v = √(2K/m) = √(2 × 3.2 × 10⁻¹⁹/9.1 × 10⁻³¹) = 8.4 × 10⁵ m/s."
       ],
       [
        "Assertion (A): Beyond a certain positive potential of the collector the photocurrent stops increasing.\nReason (R): At that stage every photoelectron emitted per second already reaches the collector.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "This is saturation. A larger accelerating potential cannot collect more electrons than are emitted, so R explains A."
       ],
       [
        "Stopping potentials for a metal are 0.50 V at 6.0 × 10¹⁴ Hz and 2.16 V at 10.0 × 10¹⁴ Hz. Its threshold frequency is about:",
        [
         "1.2 × 10¹⁴ Hz",
         "5.5 × 10¹⁴ Hz",
         "4.8 × 10¹⁴ Hz",
         "7.2 × 10¹⁴ Hz"
        ],
        2,
        "Slope h/e = (2.16 − 0.50)/(4.0 × 10¹⁴) = 4.15 × 10⁻¹⁵ V s. V₀ = 0 at ν₀ = 6.0 × 10¹⁴ − 0.50/4.15 × 10⁻¹⁵ = 4.8 × 10¹⁴ Hz.",
        "Find the slope first, then extend the line to V₀ = 0."
       ],
       [
        "A student says: “Dim ultraviolet light, with frequency above threshold, falls on zinc. Only a few photons arrive, so electrons will be emitted after a delay of a few minutes.” What is wrong?",
        [
         "Nothing is wrong, since dim light takes longer",
         "Dim light cannot cause any emission at all",
         "The delay would be hours, not minutes",
         "Emission is instantaneous (about 10⁻⁹ s or less); low intensity only means fewer electrons per second"
        ],
        3,
        "Each emission is a single photon absorbed by a single electron, which is instantaneous. Intensity decides only how many electrons are emitted per second."
       ],
       [
        "Which pair of observations in the photoelectric effect directly contradicts the wave theory of light?",
        [
         "K_max does not depend on intensity, and emission is instantaneous even for dim light",
         "The photocurrent is proportional to intensity, and light travels in a vacuum",
         "Light shows interference, and light shows diffraction",
         "Light carries energy, and the electric field is perpendicular to the magnetic field"
        ],
        0,
        "Wave theory expects K_max to grow with intensity and a delay of hours for dim light. Neither is seen."
       ],
       [
        "Metal A has work function 2.0 eV and metal B has 4.0 eV. Photons of energy 5.0 eV fall on both. The ratio of the maximum speeds of photoelectrons from A and B is:",
        [
         "3 : 1",
         "√3 : 1",
         "1 : √3",
         "2 : 1"
        ],
        1,
        "K_A = 5.0 − 2.0 = 3.0 eV and K_B = 5.0 − 4.0 = 1.0 eV. Since v ∝ √K, v_A : v_B = √3 : 1."
       ],
       [
        "A 5.0 mW beam of 500 nm light is completely absorbed by a surface. The force on the surface is about:",
        [
         "3.3 × 10⁻¹¹ N",
         "1.7 × 10⁻⁸ N",
         "1.7 × 10⁻¹¹ N",
         "1.7 × 10⁻¹⁴ N"
        ],
        2,
        "Photons per second N = P/E and each has p = E/c, so the momentum absorbed per second is P/c = 5.0 × 10⁻³/3 × 10⁸ = 1.7 × 10⁻¹¹ N.",
        "Force is momentum delivered per second. The wavelength is not needed."
       ],
       [
        "Assertion (A): In a photon–electron collision the number of photons need not be conserved.\nReason (R): In such a collision the total energy and total momentum are not conserved.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "A is true, since a photon may be absorbed or a new one created. R is false because energy and momentum are always conserved."
       ],
       [
        "A proton and an alpha particle (mass 4 times the proton, charge 2 times) are accelerated from rest through the same potential difference. The ratio λ_proton : λ_alpha is:",
        [
         "2 : 1",
         "8 : 1",
         "√2 : 1",
         "2√2 : 1"
        ],
        3,
        "p = √(2mqV), so λ ∝ 1/√(mq). The alpha has mq = 4 × 2 = 8 times larger, so λ_p/λ_α = √8 = 2√2.",
        "Use K = qV and p = √(2mK)."
       ],
       [
        "A student says: “A ball’s speed is halved, so its de Broglie wavelength is also halved.” The correct statement is:",
        [
         "The wavelength is unchanged, because the mass is unchanged",
         "The wavelength doubles, since λ = h/mv is inversely proportional to speed",
         "The wavelength becomes four times larger",
         "The wavelength is halved, as the student says"
        ],
        1,
        "λ ∝ 1/v, so halving the speed doubles λ. The student has treated λ as proportional to v."
       ],
       [
        "Assertion (A): The de Broglie wavelength of a photon equals the wavelength of the electromagnetic radiation it belongs to.\nReason (R): A photon has momentum p = hν/c, so h/p = c/ν = λ.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Putting p = hν/c into λ = h/p gives c/ν, the wavelength of the radiation. R is the correct explanation."
       ]
      ]
     ]
    },
    {
     "n": 12,
     "t": "Atoms",
     "levels": [
      [
       [
        "In the Geiger–Marsden experiment most α-particles passed straight through the gold foil. This shows that:",
        [
         "The nucleus is very large",
         "The atom is a uniform sphere of positive charge",
         "Most of the atom is empty space",
         "Electrons are heavier than α-particles"
        ],
        2,
        "The nucleus is about 10⁴ to 10⁵ times smaller than the atom, so most α-particles never come near it."
       ],
       [
        "Only about 1 in 8000 α-particles is deflected by more than 90°. This indicates that:",
        [
         "Positive charge is spread uniformly through the atom",
         "Electrons repel α-particles strongly",
         "The foil was too thick",
         "The positive charge and most of the mass are in a very small nucleus"
        ],
        3,
        "A large-angle deflection needs a very close encounter with a concentrated positive charge, and few particles come that close."
       ],
       [
        "Two energy levels in an atom are 2.3 eV apart. The frequency of radiation emitted in a transition between them is:",
        [
         "3.5 × 10¹⁵ Hz",
         "5.6 × 10¹⁴ Hz",
         "5.6 × 10⁸ Hz",
         "2.3 × 10¹⁴ Hz"
        ],
        1,
        "hν = 2.3 × 1.6 × 10⁻¹⁹ = 3.68 × 10⁻¹⁹ J, so ν = 3.68 × 10⁻¹⁹/6.63 × 10⁻³⁴ = 5.6 × 10¹⁴ Hz. (NCERT Exercise 12.3)"
       ],
       [
        "The ground state energy of hydrogen is −13.6 eV. The kinetic and potential energies of the electron in this state are:",
        [
         "K = +13.6 eV, U = −27.2 eV",
         "K = −13.6 eV, U = +27.2 eV",
         "K = +13.6 eV, U = −13.6 eV",
         "K = +27.2 eV, U = −13.6 eV"
        ],
        0,
        "K = e²/8πε₀r = −E = +13.6 eV and U = −e²/4πε₀r = 2E = −27.2 eV. (NCERT Exercise 12.4)"
       ],
       [
        "The energy of the electron in the n = 3 level of hydrogen is:",
        [
         "−4.53 eV",
         "−13.6 eV",
         "−1.51 eV",
         "−0.85 eV"
        ],
        2,
        "Eₙ = −13.6/n² eV, so E₃ = −13.6/9 = −1.51 eV."
       ],
       [
        "The radius of the innermost orbit of hydrogen is 5.3 × 10⁻¹¹ m. The radius of the n = 3 orbit is:",
        [
         "1.6 × 10⁻¹⁰ m",
         "4.8 × 10⁻¹⁰ m",
         "3.2 × 10⁻¹⁰ m",
         "1.1 × 10⁻¹⁰ m"
        ],
        1,
        "rₙ ∝ n², so r₃ = 9 × 5.3 × 10⁻¹¹ = 4.8 × 10⁻¹⁰ m. (NCERT Exercise 12.7)"
       ],
       [
        "The minimum energy needed to ionise a hydrogen atom that is in the n = 2 state is:",
        [
         "13.6 eV",
         "10.2 eV",
         "3.40 eV",
         "1.51 eV"
        ],
        2,
        "E₂ = −13.6/4 = −3.40 eV, so 3.40 eV frees the electron. The more excited the atom, the less energy is needed."
       ],
       [
        "Bohr’s second postulate states that the angular momentum of the electron in a stationary orbit is:",
        [
         "L = nh",
         "L = h/2πn",
         "L = n²h/2π",
         "L = nh/2π"
        ],
        3,
        "Angular momentum is quantised in integral multiples of h/2π, where n = 1, 2, 3, … is the principal quantum number."
       ],
       [
        "A hydrogen atom in the ground state absorbs a photon and goes to the n = 4 level. The wavelength of the photon is about:",
        [
         "486 nm",
         "656 nm",
         "97 nm",
         "12.75 nm"
        ],
        2,
        "ΔE = 13.6(1 − 1/16) = 12.75 eV, so λ = hc/ΔE = (6.63 × 10⁻³⁴ × 3 × 10⁸)/(12.75 × 1.6 × 10⁻¹⁹) = 97 nm. (NCERT Exercise 12.5)"
       ],
       [
        "According to classical electromagnetic theory, Rutherford’s atom should be unstable because:",
        [
         "The nucleus repels the electrons",
         "Electrons carry no charge",
         "Accelerating electrons radiate energy and spiral into the nucleus",
         "α-particles would knock the electrons out"
        ],
        2,
        "An orbiting electron is accelerating and so would radiate, lose energy and fall into the nucleus. It would also emit a continuous spectrum, not the observed line spectrum."
       ],
       [
        "In J. J. Thomson’s plum pudding model of the atom:",
        [
         "All the positive charge is in a tiny nucleus at the centre",
         "The positive charge is spread uniformly through the atom and the electrons are embedded in it",
         "Electrons move in circular orbits around a positive core",
         "The atom is made of positive and negative charges in separate shells"
        ],
        1,
        "Thomson (1898) pictured a uniform sphere of positive charge with electrons embedded like seeds in a watermelon. Rutherford’s scattering results ruled this out."
       ],
       [
        "In α-particle scattering, the impact parameter b is:",
        [
         "The distance of closest approach to the nucleus",
         "The distance between the nucleus and the foil surface",
         "The perpendicular distance of the initial velocity vector of the α-particle from the centre of the nucleus",
         "The angle through which the α-particle is scattered"
        ],
        2,
        "The impact parameter is the perpendicular distance between the line of the incoming α-particle and the nucleus. It decides the scattering angle."
       ],
       [
        "In a beam of α-particles scattered by a gold nucleus, the particle scattered through the largest angle is the one with:",
        [
         "The smallest impact parameter",
         "A very large impact parameter",
         "An impact parameter equal to the atomic radius",
         "The lowest charge"
        ],
        0,
        "A small impact parameter means a close encounter and a strong repulsive force. A head-on collision (minimum b) turns the α-particle back by about 180°."
       ],
       [
        "When white light passes through a cool gas and is then analysed with a spectrometer, dark lines appear in the continuous spectrum. These dark lines:",
        [
         "Are at wavelengths the gas does not interact with",
         "Are at wavelengths different from those of its emission lines",
         "Show that the gas is emitting light of those wavelengths",
         "Are at exactly the wavelengths that appear in the emission line spectrum of the same gas"
        ],
        3,
        "This is the absorption spectrum. The gas absorbs only the wavelengths it can emit, so the dark lines match its bright emission lines."
       ],
       [
        "De Broglie explained Bohr’s second postulate by assuming that:",
        [
         "The electron’s orbit is circular because of its charge",
         "The electron radiates only when it moves faster than light",
         "The circumference of the orbit holds a whole number of de Broglie wavelengths, so a standing wave forms",
         "The electron’s wavelength is equal to the radius of its orbit"
        ],
        2,
        "Only waves that fit the orbit as standing waves survive, so 2πrₙ = nλ. With λ = h/mv this gives mvrₙ = nh/2π."
       ],
       [
        "The de Broglie wavelength of the electron in the n = 1 orbit of hydrogen (r₁ = 5.3 × 10⁻¹¹ m) is about:",
        [
         "3.3 × 10⁻¹⁰ m",
         "5.3 × 10⁻¹¹ m",
         "1.7 × 10⁻¹⁰ m",
         "6.6 × 10⁻¹⁰ m"
        ],
        0,
        "For n = 1, 2πr₁ = λ, so λ = 2π × 5.3 × 10⁻¹¹ = 3.3 × 10⁻¹⁰ m, the circumference of the orbit."
       ],
       [
        "Which of the following is a limitation of Bohr’s model?",
        [
         "It cannot predict the frequencies of the lines of hydrogen",
         "It does not include the electrical forces between electrons, so it fails for atoms with more than one electron",
         "It assumes the nucleus is not positively charged",
         "It requires the electron to radiate continuously"
        ],
        1,
        "Bohr’s model works for hydrogenic atoms. It cannot be extended to even helium, and it cannot explain the relative intensities of spectral lines."
       ]
      ],
      [
       [
        "The Earth (6.0 × 10²⁴ kg) orbits the Sun at radius 1.5 × 10¹¹ m with speed 3 × 10⁴ m/s. If Bohr’s quantisation applied, the quantum number n would be about:",
        [
         "2.6 × 10⁷⁴",
         "4.1 × 10⁷³",
         "2.6 × 10⁴⁰",
         "6.6 × 10³⁴"
        ],
        0,
        "L = mvr = 6.0 × 10²⁴ × 3 × 10⁴ × 1.5 × 10¹¹ = 2.7 × 10⁴⁰ kg m²/s. n = L/(h/2π) = 2.7 × 10⁴⁰/1.06 × 10⁻³⁴ = 2.6 × 10⁷⁴. (NCERT Exercise 12.9)",
        "Divide L by h/2π, not by h."
       ],
       [
        "In Bohr’s model, the ratio of the orbital period in the n = 3 orbit to that in the n = 1 orbit is:",
        [
         "9",
         "3",
         "81",
         "27"
        ],
        3,
        "v ∝ 1/n and r ∝ n², so T = 2πr/v ∝ n³. The ratio is 3³ = 27. (NCERT Exercise 12.6)"
       ],
       [
        "Hydrogen gas at room temperature is bombarded with 12.5 eV electrons. How many different wavelengths can be emitted?",
        [
         "1",
         "2",
         "3",
         "6"
        ],
        2,
        "From n = 1 the electron can reach n = 3 (12.09 eV needed) but not n = 4 (12.75 eV). The transitions 3→2, 3→1 and 2→1 give 3 lines. (NCERT Exercise 12.8)"
       ],
       [
        "The α-particle scattering experiment is repeated with a thin sheet of solid hydrogen instead of gold foil. The result expected is:",
        [
         "More back-scattering than from gold",
         "Scattering at the same angles as from gold",
         "Almost no large-angle scattering, as the α-particle would push the lighter proton aside",
         "All the α-particles absorbed"
        ],
        2,
        "A proton is about four times lighter than an α-particle, so the α-particle is not turned back. It knocks the protons forward. (NCERT Exercise 12.2)"
       ],
       [
        "Assertion (A): In Bohr’s model, the frequency of the emitted photon equals the frequency of revolution of the electron.\nReason (R): Classical electromagnetic theory says an orbiting charge radiates at its frequency of revolution.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "In Bohr’s model the line frequency is (Eᵢ − E_f)/h, which differs from the frequency of revolution. The classical statement in R is true, so A is false."
       ],
       [
        "A student says: “The energy of the n = 2 level is −3.4 eV, so 3.4 eV excites hydrogen from n = 1 to n = 2.” What is wrong?",
        [
         "E₂ = −13.6 × 4 eV",
         "The energy needed is E₂ − E₁ = 10.2 eV, not |E₂|",
         "The electron needs 13.6 eV",
         "There is no mistake"
        ],
        1,
        "Excitation energy is the difference between the two levels: −3.4 − (−13.6) = 10.2 eV. The 3.4 eV is the energy needed to ionise from n = 2."
       ],
       [
        "A 5.5 MeV α-particle approaches a gold nucleus (Z = 79) head-on. The distance of closest approach is about:",
        [
         "3.0 × 10⁻¹⁴ m",
         "8.3 × 10⁻¹⁴ m",
         "4.1 × 10⁻¹⁴ m",
         "4.1 × 10⁻¹⁵ m"
        ],
        2,
        "At closest approach K = (1/4πε₀)(2e)(Ze)/d, so d = 2Ze²/(4πε₀K) = (2 × 79 × 9 × 10⁹ × (1.6 × 10⁻¹⁹)²)/(5.5 × 1.6 × 10⁻¹³) ≈ 4.1 × 10⁻¹⁴ m. (See NCERT Example 12.2)"
       ],
       [
        "The de Broglie wavelength of the electron in the n = 3 orbit of hydrogen, compared with that in the n = 1 orbit, is:",
        [
         "9 times",
         "1/3 as much",
         "27 times",
         "3 times"
        ],
        3,
        "2πrₙ = nλ gives λ = 2πrₙ/n. Since rₙ ∝ n², λ ∝ n, so the ratio is 3."
       ],
       [
        "The photon emitted in the transition from n = 3 to n = 2 in hydrogen has energy:",
        [
         "0.66 eV",
         "10.2 eV",
         "12.09 eV",
         "1.89 eV"
        ],
        3,
        "ΔE = E₃ − E₂ = −1.51 − (−3.40) = 1.89 eV, which is red light of wavelength about 656 nm."
       ],
       [
        "A hydrogen atom in its ground state can absorb a photon of energy:",
        [
         "11.0 eV",
         "12.5 eV",
         "10.2 eV",
         "10.0 eV"
        ],
        2,
        "A photon is absorbed only if its energy exactly matches a gap between levels. E₂ − E₁ = 10.2 eV, but 11.0, 12.5 and 10.0 eV match no gap. An electron, by contrast, can hand over part of its energy."
       ],
       [
        "In a hypothetical classical orbit of a hydrogen atom the total energy of the electron is −3.4 eV. The orbit radius is about:",
        [
         "4.2 × 10⁻¹⁰ m",
         "1.1 × 10⁻¹⁰ m",
         "5.3 × 10⁻¹¹ m",
         "2.1 × 10⁻¹⁰ m"
        ],
        3,
        "E = −e²/8πε₀r, so r = e²/(8πε₀|E|) = (9 × 10⁹ × (1.6 × 10⁻¹⁹)²)/(2 × 3.4 × 1.6 × 10⁻¹⁹) = 2.1 × 10⁻¹⁰ m. (Compare NCERT Example 12.3)",
        "Remember the factor 2 in 8πε₀."
       ],
       [
        "A student writes the total energy of the electron in a hydrogen atom as E = K + U = e²/8πε₀r + e²/4πε₀r = 3e²/8πε₀r. What is wrong?",
        [
         "K should be e²/4πε₀r",
         "The total energy must be zero",
         "The potential energy is negative, U = −e²/4πε₀r, so E = −e²/8πε₀r",
         "The electrostatic force gives no kinetic energy"
        ],
        2,
        "The electron is attracted, so U is negative. Then E = e²/8πε₀r − e²/4πε₀r = −e²/8πε₀r, negative because the electron is bound."
       ],
       [
        "Assertion (A): A solid heated to a high temperature emits a line spectrum.\nReason (R): In solids the atoms are close together, so the radiation depends on their interaction with neighbours.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "Solids and dense gases emit a continuous distribution of wavelengths because of interactions between atoms. Only rarefied gases, whose atoms are far apart, give line spectra, so A is false."
       ],
       [
        "A 4.0 MeV α-particle approaches an aluminium nucleus (Z = 13) head-on. The distance of closest approach is about:",
        [
         "1.9 × 10⁻¹⁴ m",
         "9.4 × 10⁻¹⁵ m",
         "4.7 × 10⁻¹⁵ m",
         "9.4 × 10⁻¹⁴ m"
        ],
        1,
        "d = 2Ze²/(4πε₀K) = (2 × 13 × 9 × 10⁹ × (1.6 × 10⁻¹⁹)²)/(4 × 1.6 × 10⁻¹³) = 9.4 × 10⁻¹⁵ m.",
        "Convert MeV to joules: 1 MeV = 1.6 × 10⁻¹³ J."
       ],
       [
        "Assertion (A): In a head-on collision, the entire kinetic energy of the α-particle is converted into electrostatic potential energy at the distance of closest approach.\nReason (R): The total mechanical energy of the α-particle and nucleus system is conserved.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "At closest approach the α-particle is momentarily at rest, so its KE is zero. By conservation of energy the initial KE equals the potential energy there, K = 2Ze²/4πε₀d."
       ],
       [
        "In analysing the scattering of α-particles by a gold foil, Rutherford’s treatment uses a single nucleus because:",
        [
         "The foil is very thin so each α-particle is scattered at most once, and the gold nucleus, being about 50 times heavier, stays almost at rest",
         "Gold has no electrons to scatter α-particles",
         "The α-particle is heavier than the gold nucleus",
         "The electrons in the foil attract the α-particle strongly"
        ],
        0,
        "A thin foil gives single scattering, and the heavy nucleus stays stationary, so Newton’s second law and Coulomb’s law for one nucleus are enough. Atomic electrons are too light to deflect α-particles appreciably."
       ],
       [
        "Assertion (A): The dark lines in the absorption spectrum of a gas appear at the same wavelengths as the bright lines in its emission spectrum.\nReason (R): An atom can absorb a photon of any energy and go to any higher level.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "The same energy gaps between levels are involved in absorption and emission, so A is true. An atom absorbs only photons whose energy exactly matches a gap, so R is false."
       ],
       [
        "Which of the following ions can be treated, in principle, by Bohr’s model like hydrogen?",
        [
         "Neutral helium (He)",
         "Neutral lithium (Li)",
         "Li²⁺, with a nucleus of charge +3e and one electron",
         "Be with four electrons"
        ],
        2,
        "Bohr’s model works for hydrogenic atoms, that is, one electron around a nucleus of charge +Ze, such as H, He⁺ and Li²⁺. With more electrons the electron–electron forces appear."
       ],
       [
        "A student argues: “Bohr’s model works for hydrogen, so for helium I just add the attraction of the second electron to the nucleus and use the same method.” What is missing?",
        [
         "The electron–electron repulsion, which Bohr’s model does not include",
         "The magnetic force on the nucleus",
         "The quantisation of the angular momentum",
         "The nucleus has no charge in helium"
        ],
        0,
        "In a many-electron atom each electron interacts with the nucleus and with all the other electrons. Bohr’s model has only the nucleus–electron force, so this attempt did not succeed."
       ]
      ]
     ]
    },
    {
     "n": 13,
     "t": "Nuclei",
     "levels": [
      [
       [
        "The nucleus of gold is written ¹⁹⁷₇₉Au. It contains:",
        [
         "118 protons and 79 neutrons",
         "79 protons and 118 neutrons",
         "79 protons and 197 neutrons",
         "197 protons and 79 electrons"
        ],
        1,
        "Z = 79 gives 79 protons, and the neutron number is N = A − Z = 197 − 79 = 118. The 79 electrons are outside the nucleus."
       ],
       [
        "Isotopes of an element have the same:",
        [
         "Mass number but different atomic number",
         "Neutron number",
         "Both atomic number and mass number",
         "Atomic number but different mass number"
        ],
        3,
        "Isotopes have the same number of protons (same Z) but different numbers of neutrons, so their mass numbers differ."
       ],
       [
        "³₁H and ³₂He are examples of:",
        [
         "Isotopes",
         "Isotones",
         "Isobars",
         "Isomers"
        ],
        2,
        "Nuclides with the same mass number A but different Z are isobars. Isotopes share Z, and isotones share N."
       ],
       [
        "The approximate ratio of the nuclear radii of ¹⁹⁷Au and ¹⁰⁷Ag is:",
        [
         "1.84",
         "0.81",
         "1.23",
         "3.4"
        ],
        2,
        "R = R₀A^(1/3), so R_Au/R_Ag = (197/107)^(1/3) = 1.23. (NCERT Exercise 13.4)"
       ],
       [
        "The density of nuclear matter:",
        [
         "Increases with mass number A",
         "Is independent of mass number A",
         "Decreases with A",
         "Is about 10³ kg m⁻³"
        ],
        1,
        "R ∝ A^(1/3) makes the volume proportional to A. Mass is also proportional to A, so the density is constant at about 2.3 × 10¹⁷ kg m⁻³. (NCERT Exercise 13.10)"
       ],
       [
        "The energy equivalent of one atomic mass unit is:",
        [
         "9.3 MeV",
         "93.15 MeV",
         "1.6 MeV",
         "931.5 MeV"
        ],
        3,
        "E = (1.66 × 10⁻²⁷ kg)c² = 1.49 × 10⁻¹⁰ J = 931.5 MeV, so 1 u = 931.5 MeV/c². (NCERT Example 13.3)"
       ],
       [
        "Which statement about the nuclear force is true?",
        [
         "It depends on electric charge",
         "It is a long-range force",
         "It is nearly the same between n–n, p–n and p–p pairs",
         "It is weaker than gravitation"
        ],
        2,
        "The nuclear force is charge-independent, strong and short-ranged. It is much stronger than the Coulomb and gravitational forces."
       ],
       [
        "The binding energy per nucleon is greatest (about 8.75 MeV) for nuclei of mass number near:",
        [
         "4",
         "56",
         "120",
         "238"
        ],
        1,
        "The curve rises to a maximum near A = 56 (iron) and falls slowly for heavier nuclei."
       ],
       [
        "The energy released in the fission of one uranium nucleus is of the order of:",
        [
         "200 eV",
         "200 MeV",
         "2 MeV",
         "20 keV"
        ],
        1,
        "Fragments of A ≈ 120 are bound by about 0.9 MeV more per nucleon than A ≈ 240, so 240 × 0.9 ≈ 216 MeV is released per fission."
       ],
       [
        "Nuclear fusion requires very high temperatures because:",
        [
         "Neutrons are unstable",
         "Nuclear force is long-ranged",
         "Fusion absorbs energy",
         "The nuclei must overcome their Coulomb repulsion"
        ],
        3,
        "Both nuclei are positively charged, so they need enough kinetic energy to climb the Coulomb barrier (about 400 keV for two protons)."
       ],
       [
        "The radius of a nucleus is smaller than the radius of an atom by a factor of about 10⁴. The volume of the nucleus is therefore about what fraction of the atomic volume?",
        [
         "10⁻⁴",
         "10⁻⁸",
         "10⁻¹²",
         "10⁻¹⁶"
        ],
        2,
        "Volume goes as the cube of the radius, so the ratio is (10⁻⁴)³ = 10⁻¹². This is why an atom is almost empty space."
       ],
       [
        "An element has two isotopes, of mass 10 u (20% abundance) and 11 u (80% abundance). Its average atomic mass is:",
        [
         "10.8 u",
         "10.5 u",
         "10.2 u",
         "11.0 u"
        ],
        0,
        "The atomic mass is the weighted average: (20 × 10 + 80 × 11)/100 = 10.8 u, as for chlorine in NCERT Section 13.2."
       ],
       [
        "Which statement about a free neutron is correct?",
        [
         "It is stable, just like a free proton",
         "It decays into a proton, an electron and an antineutrino, with a mean life of about 1000 s",
         "It carries one unit of positive charge",
         "Its mass is much smaller than the proton mass"
        ],
        1,
        "A free neutron is unstable, but it is stable inside a nucleus. Its mass (1.00866 u) is very nearly the proton mass (1.00727 u)."
       ],
       [
        "In 1932 Chadwick found a neutral radiation from beryllium bombarded with α-particles. It was taken to be neutrons, not photons, because:",
        [
         "It was bent by a magnetic field",
         "It was absorbed by thin paper",
         "It carried a charge of −e",
         "As photons, their energy would have to be far higher than the bombardment could supply"
        ],
        3,
        "Conservation of energy and momentum showed that photons knocking out protons would need much more energy than was available. Neutral particles of mass nearly equal to the proton mass fit the data."
       ],
       [
        "The energy equivalent of 0.5 mg of matter is (c = 3 × 10⁸ m/s):",
        [
         "4.5 × 10¹⁰ J",
         "4.5 × 10⁷ J",
         "4.5 × 10¹³ J",
         "1.5 × 10² J"
        ],
        0,
        "E = mc² = (0.5 × 10⁻⁶ kg)(9 × 10¹⁶ m² s⁻²) = 4.5 × 10¹⁰ J. Compare NCERT Example 13.2."
       ],
       [
        "In α-decay, the particle emitted by the nucleus is:",
        [
         "An electron",
         "A high-energy photon",
         "A helium nucleus, ⁴₂He",
         "A positron"
        ],
        2,
        "α-rays are helium nuclei, β-rays are electrons or positrons, and γ-rays are high-energy photons."
       ],
       [
        "Which statement about radioactive emissions is correct?",
        [
         "γ-rays are helium nuclei",
         "β-decay emits electrons or positrons",
         "α-rays are high-energy photons",
         "A positron has the same charge as an electron"
        ],
        1,
        "β-decay emits electrons or positrons. A positron has the same mass as an electron but exactly opposite charge, and γ-rays are photons."
       ],
       [
        "Fission of 1 kg of uranium gives about 10¹⁴ J, while burning 1 kg of coal gives about 10⁷ J. The ratio of the two is about:",
        [
         "10³",
         "10⁵",
         "10²¹",
         "10⁷"
        ],
        3,
        "10¹⁴/10⁷ = 10⁷. Nuclear processes release energies of the order of MeV, against eV for chemical ones."
       ],
       [
        "In a controlled fusion reactor the fuel is heated to about 10⁸ K. At this temperature the fuel exists as:",
        [
         "A plasma of positive ions and electrons",
         "A neutral gas of atoms",
         "A liquid",
         "A solid"
        ],
        0,
        "At such temperatures atoms are stripped of electrons to form a plasma. The challenge is to confine it, since no container can stand that temperature."
       ]
      ],
      [
       [
        "Given m(¹⁴₇N) = 14.00307 u, m(¹H) = 1.007825 u and m_n = 1.008665 u (atomic masses), the binding energy of ¹⁴N is about:",
        [
         "7.5 MeV",
         "209 MeV",
         "0.112 MeV",
         "104.7 MeV"
        ],
        3,
        "ΔM = 7(1.007825) + 7(1.008665) − 14.00307 = 0.11236 u. Atomic masses make the electron masses cancel, so E_b = 0.11236 × 931.5 = 104.7 MeV. (NCERT Exercise 13.1)"
       ],
       [
        "For ¹²C + ¹²C → ²⁰Ne + ⁴He, the masses are 12.000000 u, 19.992439 u and 4.002603 u. The Q-value is:",
        [
         "−4.62 MeV, endothermic",
         "+4.62 MeV, exothermic",
         "+9.24 MeV, exothermic",
         "+0.0050 MeV, exothermic"
        ],
        1,
        "Q = [2(12.000000) − (19.992439 + 4.002603)] × 931.5 = 0.004958 × 931.5 = +4.62 MeV. A positive Q means the reaction releases energy. (NCERT Exercise 13.5)"
       ],
       [
        "Is the fission of ⁵⁶Fe into two ²⁸Al nuclei energetically possible? Take m(⁵⁶Fe) = 55.93494 u and m(²⁸Al) = 27.98191 u.",
        [
         "Yes, Q = +26.9 MeV",
         "No, Q = −0.029 MeV",
         "No, Q = −26.9 MeV",
         "Yes, Q = +0.029 MeV"
        ],
        2,
        "Q = [55.93494 − 2(27.98191)] × 931.5 = −0.02888 × 931.5 ≈ −26.9 MeV. Energy would have to be supplied, as iron is near the peak of the binding energy curve. (NCERT Exercise 13.6)"
       ],
       [
        "The average energy released per fission of ²³⁹Pu is 180 MeV. If all the atoms in 1 kg of pure ²³⁹Pu fission, the energy released is about:",
        [
         "1.8 × 10²⁶ MeV",
         "4.5 × 10²⁶ MeV",
         "4.5 × 10²³ MeV",
         "4.5 × 10²⁹ MeV"
        ],
        1,
        "Atoms = (1000/239) × 6.023 × 10²³ = 2.52 × 10²⁴. Energy = 2.52 × 10²⁴ × 180 MeV = 4.5 × 10²⁶ MeV. (NCERT Exercise 13.7)"
       ],
       [
        "A 100 W lamp is run on the fusion ²H + ²H → ³He + n + 3.27 MeV, using 2.0 kg of deuterium. It can glow for about:",
        [
         "5.0 × 10⁷ years",
         "1.0 × 10⁵ years",
         "5.0 × 10⁴ years",
         "1.6 × 10⁴ years"
        ],
        2,
        "2000 g of deuterium is 6.0 × 10²⁶ atoms, and each reaction uses two, giving 3.0 × 10²⁶ reactions. Energy = 3.0 × 10²⁶ × 3.27 MeV = 1.6 × 10¹⁴ J, so t = E/P = 1.6 × 10¹² s ≈ 5 × 10⁴ years. (NCERT Exercise 13.8)"
       ],
       [
        "Two deuterons, each treated as a hard sphere of radius 2.0 fm, collide head-on. The height of the Coulomb barrier is about:",
        [
         "720 keV",
         "90 keV",
         "3.6 MeV",
         "360 keV"
        ],
        3,
        "They touch when their centres are 4.0 fm apart, so U = (1/4πε₀)e²/r = 9 × 10⁹ × (1.6 × 10⁻¹⁹)²/(4 × 10⁻¹⁵) = 5.8 × 10⁻¹⁴ J ≈ 360 keV. (NCERT Exercise 13.9)"
       ],
       [
        "Assertion (A): In a nuclear reaction the numbers of protons and neutrons are separately conserved, so no mass is converted into energy.\nReason (R): The energy released comes from the difference in total binding energy between the two sides.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "Total nucleon rest mass is unchanged, but the binding energies differ and binding energy contributes a mass defect. This is how mass converts to energy, so A is false and R is true. (NCERT Example 13.4)"
       ],
       [
        "A student finds the mass defect of ¹⁶O as 0.13251 u using m_p, m_n and the atomic mass 15.99493 u. What is wrong?",
        [
         "The atomic mass includes 8 electrons. The nuclear mass is 15.99053 u, giving ΔM = 0.13691 u",
         "The neutron mass should be used for all 16 nucleons",
         "The mass defect should be added to the nuclear mass, not subtracted",
         "There is no mistake"
        ],
        0,
        "Using proton masses for the nucleons means the nuclear mass must be used, so 8mₑ (0.0044 u) is subtracted from the atomic mass. The result is ΔM = 0.13691 u, as in NCERT Section 13.4."
       ],
       [
        "The mass of ⁵⁶Fe is 55.934939 u. Using m_H = 1.007825 u and m_n = 1.008665 u, its binding energy per nucleon is about:",
        [
         "492 MeV",
         "8.79 MeV",
         "9.45 MeV",
         "7.85 MeV"
        ],
        1,
        "ΔM = 26(1.007825) + 30(1.008665) − 55.934939 = 0.52846 u, so E_b = 492 MeV. Dividing by 56 nucleons gives 8.79 MeV. (NCERT Exercise 13.2)"
       ],
       [
        "A nucleus with A = 240 (7.6 MeV per nucleon) splits into two nuclei with A = 120 (8.5 MeV per nucleon). The energy released is about:",
        [
         "1824 MeV",
         "2040 MeV",
         "216 MeV",
         "0.9 MeV"
        ],
        2,
        "The gain is 0.9 MeV per nucleon over 240 nucleons: 240 × (8.5 − 7.6) = 216 MeV. This is why fission releases about 200 MeV."
       ],
       [
        "Assertion (A): An atom is almost empty space.\nReason (R): The radius of a nucleus is about 10⁴ times smaller than that of the atom, yet the nucleus holds more than 99.9% of the atom’s mass.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "The nuclear volume is only about 10⁻¹² of the atomic volume, so nearly all the atom’s volume is empty. Both statements are true and R explains A."
       ],
       [
        "Boron has two isotopes, ¹⁰B (10.01 u) and ¹¹B (11.01 u), and its atomic mass is 10.81 u. The percentage abundance of ¹⁰B is about:",
        [
         "80%",
         "20%",
         "10%",
         "50%"
        ],
        1,
        "Let the fraction of ¹⁰B be x: 10.01x + 11.01(1 − x) = 10.81, so x = 0.20.",
        "Use a weighted average."
       ],
       [
        "A student reasons: “The masses of the hydrogen, deuterium and tritium nuclei are in the ratio 1 : 2 : 3, and all have one positive charge, so deuterium has one proton and one electron.” What is wrong?",
        [
         "Deuterium has two protons, since its mass is twice that of hydrogen",
         "Deuterium has one proton and two neutrons",
         "Electrons are not in the nucleus; the extra mass is a neutral particle, so deuterium has one proton and one neutron",
         "Nothing is wrong, since the electron supplies the extra mass"
        ],
        2,
        "Electrons inside the nucleus were ruled out by quantum theory. The extra neutral matter is one neutron for deuterium and two for tritium."
       ],
       [
        "The radius of a nucleus is half the radius of the ¹⁹⁷Au nucleus. Its mass number is about:",
        [
         "12",
         "49",
         "99",
         "25"
        ],
        3,
        "R ∝ A^(1/3), so A = 197 × (1/2)³ = 24.6 ≈ 25. The ratio of volumes is 8 : 1, and the density is the same."
       ],
       [
        "As the energy of α-particles scattered from gold is raised well above 5.5 MeV, the results eventually depart from Rutherford’s calculation because:",
        [
         "The closest approach becomes so small that the short-range nuclear force starts to act",
         "The gold nucleus gains electrons",
         "The Coulomb force turns attractive",
         "The α-particles become neutral"
        ],
        0,
        "Rutherford’s calculation assumes pure Coulomb repulsion. The distance at which deviations begin gives an estimate of the nuclear size."
       ],
       [
        "If 1 g of matter were completely converted to energy, a 100 W lamp could be kept glowing for about (1 year = 3.154 × 10⁷ s):",
        [
         "9 × 10¹¹ years",
         "2.9 × 10⁷ years",
         "2.9 × 10⁴ years",
         "2.9 × 10¹ years"
        ],
        2,
        "E = 10⁻³ × (3 × 10⁸)² = 9 × 10¹³ J, so t = E/P = 9 × 10¹¹ s. Dividing by 3.154 × 10⁷ s per year gives 2.9 × 10⁴ years. (NCERT Example 13.2)"
       ],
       [
        "Which statement about mass–energy interconversion is correct?",
        [
         "It occurs only in nuclear reactions, never in chemical ones",
         "It occurs in chemical reactions too, but the mass defects are about a million times smaller than in nuclear reactions",
         "It occurs in chemical reactions, with mass defects about a million times larger than in nuclear ones",
         "It occurs only when neutrons are released"
        ],
        1,
        "Chemical binding energy also contributes a mass defect, but it is a million times smaller. This is why the interconversion seems absent in chemistry. (NCERT Example 13.4)"
       ],
       [
        "Stable light nuclei have N : Z close to 1 : 1, but stable heavy nuclei have N : Z of about 3 : 2. This is because:",
        [
         "Neutrons repel protons",
         "The nuclear force acts only between neutrons",
         "Protons become unstable in heavy nuclei",
         "Extra neutrons add attractive nuclear force without adding Coulomb repulsion, offsetting the repulsion among protons"
        ],
        3,
        "The nuclear force is charge-independent, while the Coulomb repulsion acts only between protons. More neutrons are needed to bind a large number of protons."
       ],
       [
        "Assertion (A): Gravitational attraction between nucleons is what holds a nucleus together.\nReason (R): The gravitational force is much weaker than even the Coulomb force.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "The binding is due to the strong nuclear force, which dominates the Coulomb repulsion. Gravity is far too weak, so A is false while R is true."
       ],
       [
        "Two nucleons are held 0.5 fm apart and then 1.5 fm apart. The nuclear force between them is:",
        [
         "Attractive in both cases",
         "Repulsive at 0.5 fm and attractive at 1.5 fm",
         "Attractive at 0.5 fm and repulsive at 1.5 fm",
         "Zero in both cases"
        ],
        1,
        "The potential energy is a minimum at about 0.8 fm. The force is strongly repulsive at smaller separations and attractive at larger ones, up to a few fm."
       ],
       [
        "A ²³⁸₉₂U nucleus emits an α-particle. The daughter nucleus has:",
        [
         "90 protons and 146 neutrons",
         "90 protons and 144 neutrons",
         "92 protons and 142 neutrons",
         "94 protons and 140 neutrons"
        ],
        1,
        "The α-particle (⁴₂He) removes 2 protons and 2 neutrons, leaving Z = 90 and A = 234. So N = 234 − 90 = 144."
       ],
       [
        "A 1000 MW power station runs for 30 days. If 1 kg of uranium gives 10¹⁴ J on fission and 1 kg of coal gives 10⁷ J on burning, the masses of uranium and coal needed are about:",
        [
         "26 kg of uranium; 2.6 × 10⁸ kg of coal",
         "0.86 kg of uranium; 8.6 × 10⁶ kg of coal",
         "2.6 × 10³ kg of uranium; 2.6 × 10⁸ kg of coal",
         "26 kg of uranium; 2.6 × 10⁷ kg of coal"
        ],
        0,
        "E = 10⁹ W × 30 × 86400 s = 2.6 × 10¹⁵ J. Uranium = 2.6 × 10¹⁵/10¹⁴ ≈ 26 kg, and coal = 2.6 × 10¹⁵/10⁷ = 2.6 × 10⁸ kg.",
        "Convert 30 days to seconds first."
       ],
       [
        "A student writes ¹₀n + ²³⁵₉₂U → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 2 ¹₀n and says it is balanced because 56 + 36 = 92. What is wrong?",
        [
         "The atomic numbers do not add up",
         "The mass numbers do not balance: the right side totals 141 + 92 + 2 = 235 but the left side is 236, so 3 neutrons are released",
         "Neutrons are never released in fission",
         "Nothing is wrong"
        ],
        1,
        "Protons and neutrons are both conserved in nuclear reactions. Checking only Z is not enough, and A must be 236 on both sides, so the reaction releases 3 neutrons."
       ],
       [
        "Taking 200 MeV per fission of ²³⁵U (N_A = 6.023 × 10²³ per mole, 1 MeV = 1.6 × 10⁻¹³ J), the energy from fission of all the nuclei in 1 kg is about:",
        [
         "5.1 × 10²⁶ J",
         "1.9 × 10¹⁶ J",
         "8.2 × 10¹⁰ J",
         "8.2 × 10¹³ J"
        ],
        3,
        "Nuclei = (1000/235) × 6.023 × 10²³ = 2.56 × 10²⁴. Energy = 2.56 × 10²⁴ × 200 MeV = 5.1 × 10²⁶ MeV = 8.2 × 10¹³ J, close to the 10¹⁴ J quoted by NCERT."
       ],
       [
        "Assertion (A): Fusion goes on in the Sun’s core even though its temperature (1.5 × 10⁷ K) is far below that needed for average protons to cross the Coulomb barrier.\nReason (R): Every proton in the Sun’s core has energy greater than the Coulomb barrier.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "Only the protons whose energies are far above the average can fuse, so A is true. R is false, since most protons have energies near the average."
       ],
       [
        "A student says: “In the Sun, ³₂He + ³₂He → ⁴₂He + 2 ¹₁H can happen after reactions (i)–(iii) of the p–p cycle have run just once.” What is wrong?",
        [
         "Reactions (i)–(iii) must run twice, to make the two ³He nuclei that react in step (iv)",
         "Reactions (i)–(iii) must run four times",
         "Step (iv) does not need ³He nuclei",
         "Nothing is wrong"
        ],
        0,
        "Step (iv) needs two ³He nuclei, so (i)–(iii) occur twice. The net effect is 4 ¹H → ⁴He with 26.7 MeV released."
       ],
       [
        "In stars, fusion can build elements only up to those near the peak of the binding energy curve (A ≈ 56) because:",
        [
         "Stars run out of neutrons",
         "The Coulomb barrier disappears beyond iron",
         "Helium nuclei cannot fuse at all",
         "Beyond the peak, binding energy per nucleon decreases, so fusion would absorb energy rather than release it"
        ],
        3,
        "Energy is released only when nuclei move toward higher binding energy per nucleon. Beyond A ≈ 56 the curve falls, so fusion is no longer exothermic."
       ],
       [
        "A fusion reactor is designed to heat deuterium fuel to about 10⁸ K. Which statement describes the situation correctly?",
        [
         "The fuel is a neutral gas that is easy to confine in steel walls",
         "The fuel is a solid pellet that melts at this temperature",
         "The fuel is a plasma of ions and electrons; no material container can stand this temperature, so confining the plasma is the main challenge",
         "The fuel turns entirely into neutrons, so no confinement is needed"
        ],
        2,
        "At about 10⁸ K the fuel is a plasma of positive ions and electrons. Steady power needs this plasma to be confined without touching any container wall."
       ]
      ]
     ]
    },
    {
     "n": 14,
     "t": "Semiconductor Electronics",
     "levels": [
      [
       [
        "Which statement is true for n-type silicon?",
        [
         "Electrons are the majority carriers and trivalent atoms are the dopants",
         "Electrons are the minority carriers and pentavalent atoms are the dopants",
         "Holes are the minority carriers and pentavalent atoms are the dopants",
         "Holes are the majority carriers and trivalent atoms are the dopants"
        ],
        2,
        "Pentavalent dopants (donors) give n-type Si, where electrons are the majority carriers and holes are the minority carriers. Only the third statement is correct. (NCERT Exercise 14.1)"
       ],
       [
        "A p-type semiconductor is made by doping silicon with atoms that are:",
        [
         "Pentavalent (As, P)",
         "Tetravalent (C, Sn)",
         "Trivalent (B, Al, In)",
         "Divalent (Mg, Zn)"
        ],
        2,
        "A trivalent dopant has one valence electron too few, so each acceptor atom creates one hole in the lattice. (NCERT Exercise 14.2)"
       ],
       [
        "Carbon, silicon and germanium have four valence electrons each. Their band gaps are related by:",
        [
         "E_g(Si) < E_g(Ge) < E_g(C)",
         "E_g(C) > E_g(Si) > E_g(Ge)",
         "E_g(C) < E_g(Ge) > E_g(Si)",
         "E_g(C) = E_g(Si) = E_g(Ge)"
        ],
        1,
        "The gaps are about 5.4 eV for carbon (diamond), 1.1 eV for Si and 0.7 eV for Ge. (NCERT Exercise 14.3)"
       ],
       [
        "In an unbiased p–n junction, holes diffuse from the p-region to the n-region because:",
        [
         "The hole concentration is higher in the p-region than in the n-region",
         "The junction potential pushes them across",
         "Free electrons in the n-region attract them",
         "They are repelled by the ionised acceptors"
        ],
        0,
        "Diffusion is driven by the concentration gradient. The barrier potential that builds up opposes it. (NCERT Exercise 14.4)"
       ],
       [
        "When a forward bias is applied to a p–n junction, it:",
        [
         "Raises the potential barrier",
         "Widens the depletion layer",
         "Reduces the majority-carrier current to zero",
         "Lowers the potential barrier"
        ],
        3,
        "The applied voltage opposes the built-in potential, so the barrier falls and the depletion layer narrows. (NCERT Exercise 14.5)"
       ],
       [
        "The input to a full-wave rectifier has a frequency of 50 Hz. The output frequency is:",
        [
         "50 Hz",
         "25 Hz",
         "100 Hz",
         "200 Hz"
        ],
        2,
        "A half-wave rectifier gives one pulse per cycle (50 Hz). A full-wave rectifier gives two, so 100 Hz. (NCERT Exercise 14.6)"
       ],
       [
        "The cut-in (threshold) voltage of a silicon diode is about:",
        [
         "0.2 V",
         "1.1 V",
         "0.7 V",
         "5 V"
        ],
        2,
        "Below about 0.7 V a silicon diode passes almost no current. A germanium diode starts to conduct at about 0.2 V."
       ],
       [
        "In an intrinsic semiconductor at room temperature:",
        [
         "Electrons are the majority carriers",
         "Holes are the majority carriers",
         "There are no free charge carriers",
         "The number of free electrons equals the number of holes"
        ],
        3,
        "Thermal energy creates electrons and holes in pairs, so n_e = n_h = n_i."
       ],
       [
        "When a p–n junction is reverse biased, the depletion region:",
        [
         "Narrows",
         "Widens",
         "Disappears",
         "Stays the same"
        ],
        1,
        "The applied voltage adds to the barrier potential, so the barrier gets higher and the depletion layer wider."
       ],
       [
        "A material has a band gap greater than 3 eV and no electrons in its conduction band at room temperature. It is:",
        [
         "A metal",
         "A semiconductor",
         "An insulator",
         "A doped semiconductor"
        ],
        2,
        "With E_g > 3 eV, thermal energy cannot lift electrons across the gap, so there is no conduction."
       ],
       [
        "Which of the following is NOT true of semiconductor devices when compared with vacuum tubes?",
        [
         "They are small in size",
         "They operate at low voltages",
         "They need a heated cathode to supply the mobile electrons",
         "They have a long life and high reliability"
        ],
        2,
        "In a semiconductor the charge carriers are supplied within the solid itself, so no heated cathode or evacuated space is needed. The heated cathode belongs to vacuum tubes."
       ],
       [
        "A material has an electrical conductivity of about 10⁻³ S m⁻¹. It is most likely a:",
        [
         "Metal",
         "Semiconductor",
         "Insulator",
         "Superconductor"
        ],
        1,
        "Semiconductors have σ in the range of about 10⁵ to 10⁻⁶ S m⁻¹, metals have σ ≥ 10² S m⁻¹ and insulators have σ ≤ 10⁻¹¹ S m⁻¹."
       ],
       [
        "In a metal, the valence band and the conduction band:",
        [
         "Overlap, or the conduction band is partially filled, so many electrons are free to conduct",
         "Are separated by a gap of more than 3 eV",
         "Are separated by a gap of about 1 eV",
         "Are both completely empty at all temperatures"
        ],
        0,
        "With overlapping (or partly filled) bands, a large number of electrons are available for conduction, so the resistance is low."
       ],
       [
        "In an intrinsic semiconductor, a hole appears to move because:",
        [
         "A free electron in the conduction band moves into it",
         "The positive ion core moves through the lattice",
         "The atoms of the lattice drift in the electric field",
         "A bound valence electron from a neighbouring bond jumps into the vacancy"
        ],
        3,
        "When a bound electron fills the vacancy, a vacancy appears at its old site, so the hole seems to move the other way. Hole motion is just a convenient way of describing the motion of bound electrons."
       ],
       [
        "In an intrinsic semiconductor at a fixed temperature, the number of electron–hole pairs stays steady because:",
        [
         "The rate of generation equals the rate of recombination",
         "Generation stops once equilibrium is reached",
         "Recombination never occurs in a pure crystal",
         "Electrons are removed by the battery"
        ],
        0,
        "Thermal generation of pairs and recombination (an electron meeting a hole) go on together. At equilibrium the two rates are equal."
       ],
       [
        "The energy needed to free the extra (fifth) electron of a pentavalent donor in silicon is about:",
        [
         "1.1 eV",
         "0.05 eV",
         "5 eV",
         "0.7 eV"
        ],
        1,
        "The fifth electron is very weakly bound: about 0.05 eV for Si and 0.01 eV for Ge. This is far less than the 1.1 eV needed to cross the band gap of Si."
       ],
       [
        "In a doped silicon sample, n_i = 2 × 10¹⁶ m⁻³ and the electron concentration is 8 × 10²² m⁻³. The hole concentration is:",
        [
         "2.5 × 10⁻⁷ m⁻³",
         "8 × 10²² m⁻³",
         "5 × 10⁹ m⁻³",
         "2 × 10¹⁶ m⁻³"
        ],
        2,
        "In thermal equilibrium nₑn_h = n_i², so n_h = (4 × 10³²)/(8 × 10²²) = 5 × 10⁹ m⁻³."
       ],
       [
        "In the energy-band picture of extrinsic semiconductors, the donor level (E_D) of an n-type material and the acceptor level (E_A) of a p-type material lie:",
        [
         "E_D just above the valence band and E_A just below the conduction band",
         "Both in the middle of the band gap",
         "Both inside the conduction band",
         "E_D just below the conduction band and E_A just above the valence band"
        ],
        3,
        "A donor level lies slightly below the conduction band, so electrons jump into it easily. An acceptor level lies slightly above the valence band, so it accepts valence electrons and leaves holes."
       ],
       [
        "The depletion region of a p-n junction consists of:",
        [
         "Free electrons and holes in equal numbers",
         "Immobile ionised donors on the n-side and ionised acceptors on the p-side",
         "Only mobile majority carriers",
         "Neutral atoms with no charge at all"
        ],
        1,
        "Diffusing electrons and holes leave behind positive donor ions on the n-side and negative acceptor ions on the p-side. These ions are immobile and the region has no free carriers."
       ],
       [
        "In an unbiased p-n junction at equilibrium:",
        [
         "There is only diffusion current",
         "There is only drift current",
         "The diffusion current equals the drift current, so the net current is zero",
         "The diffusion current is much larger than the drift current"
        ],
        2,
        "The drift current grows as the space-charge layers extend, until it balances the diffusion current. Then no net current flows."
       ],
       [
        "In the symbol of a p-n junction diode, the arrow points:",
        [
         "From the p-side to the n-side, in the direction of conventional current under forward bias",
         "From the n-side to the p-side",
         "In the direction of electron flow under forward bias",
         "Towards the terminal connected to the positive of the battery in reverse bias"
        ],
        0,
        "The arrowhead shows the direction in which conventional current flows when the diode is forward biased."
       ],
       [
        "The voltage across a diode changes from 0.70 V to 0.90 V while the current changes from 6 mA to 10 mA. Its dynamic resistance is:",
        [
         "0.9 Ω",
         "20 Ω",
         "90 Ω",
         "50 Ω"
        ],
        3,
        "r_d = ΔV/ΔI = 0.20 V/(4 × 10⁻³ A) = 50 Ω."
       ],
       [
        "To measure the V–I characteristics of a diode, a milliammeter is used in forward bias and a microammeter in reverse bias because:",
        [
         "The forward current is in µA and the reverse current is in mA",
         "The forward current is in mA while the reverse current is only in µA",
         "Both currents are of the same order",
         "A microammeter cannot be used in forward bias"
        ],
        1,
        "Forward current is usually in mA, while the reverse (saturation) current is only a few µA."
       ],
       [
        "In a half-wave rectifier, current flows through the load:",
        [
         "For the whole ac cycle",
         "Only when the diode is reverse biased",
         "Only during the half-cycles in which the diode is forward biased",
         "Only during the negative half-cycle, always"
        ],
        2,
        "The diode conducts only when its p-side is positive with respect to its n-side. So the output is a series of pulses, one for each input cycle."
       ],
       [
        "In a centre-tap full-wave rectifier, when terminal A of the secondary is positive with respect to the centre tap:",
        [
         "D₁ conducts and D₂ does not",
         "Both D₁ and D₂ conduct",
         "D₂ conducts and D₁ does not",
         "Neither diode conducts"
        ],
        0,
        "The voltage at B is then negative. So D₁ is forward biased and conducts, while D₂ is reverse biased."
       ],
       [
        "A capacitor filter is used with a rectifier. The capacitor is connected:",
        [
         "In series with the load, with an inductor across it",
         "In series with the diode",
         "Across the secondary of the transformer",
         "In parallel with the load resistor R_L"
        ],
        3,
        "The capacitor is connected across the output terminals, in parallel with R_L. It charges to the peak voltage and discharges slowly through the load."
       ]
      ],
      [
       [
        "A pure Si crystal has 5 × 10²⁸ atoms m⁻³ and is doped with 1 ppm of arsenic. Given n_i = 1.5 × 10¹⁶ m⁻³, the hole concentration is about:",
        [
         "4.5 × 10¹⁵ m⁻³",
         "5 × 10²² m⁻³",
         "1.5 × 10¹⁶ m⁻³",
         "4.5 × 10⁹ m⁻³"
        ],
        3,
        "n_e ≈ N_D = 5 × 10²². Then n_h = n_i²/n_e = (2.25 × 10³²)/(5 × 10²²) = 4.5 × 10⁹ m⁻³. (NCERT Example 14.2)"
       ],
       [
        "Assertion (A): A p-type semiconductor is negatively charged.\nReason (R): The majority carriers in a p-type semiconductor are holes.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "The crystal is electrically neutral, because the negative acceptor ions balance the holes. R is true, but A is false."
       ],
       [
        "A student says: “Under forward bias a large current flows because the depletion region widens and the drift current increases.” What is wrong?",
        [
         "Forward bias raises the barrier and widens the depletion layer",
         "Drift current is much larger than diffusion current under forward bias",
         "Forward bias narrows the depletion layer and lowers the barrier, so diffusion of carriers (minority-carrier injection) dominates",
         "The depletion layer does not change with bias"
        ],
        2,
        "Forward bias lowers the barrier and narrows the depletion layer, letting majority carriers cross and be injected as minority carriers. The drift current stays negligible."
       ],
       [
        "A diode’s characteristic shows 10 mA at 0.7 V and 20 mA at 0.8 V. Its dynamic resistance in this region is:",
        [
         "80 Ω",
         "0.1 Ω",
         "70 Ω",
         "10 Ω"
        ],
        3,
        "r_d = ΔV/ΔI = (0.8 − 0.7)/(10 × 10⁻³) = 10 Ω. The static ratio V/I at 10 mA would be 70 Ω. (NCERT Example 14.4)"
       ],
       [
        "Silicon is doped with 1 × 10²² m⁻³ acceptor atoms (n_i = 1.5 × 10¹⁶ m⁻³). The electron concentration is about:",
        [
         "1.5 × 10¹⁶ m⁻³",
         "1.0 × 10²² m⁻³",
         "6.7 × 10⁻⁷ m⁻³",
         "2.25 × 10¹⁰ m⁻³"
        ],
        3,
        "n_h ≈ N_A = 10²², so n_e = n_i²/n_h = (1.5 × 10¹⁶)²/10²² = 2.25 × 10¹⁰ m⁻³. These electrons are the minority carriers."
       ],
       [
        "The secondary of a centre-tap transformer has a peak voltage of 24 V across its whole winding. With ideal diodes, the peak output voltage across the load of a full-wave rectifier is:",
        [
         "24 V",
         "12 V",
         "48 V",
         "6 V"
        ],
        1,
        "Each diode works with only half the secondary, from one end to the centre tap, so the output peaks at 12 V."
       ],
       [
        "In a capacitor-input filter, the ripple in the rectified output is smaller when:",
        [
         "The capacitance C is small",
         "The time constant C·R_L is large",
         "The load resistance is very small",
         "The diode is replaced by a resistor"
        ],
        1,
        "The capacitor discharges more slowly when C·R_L is large, so the output stays close to the peak voltage."
       ],
       [
        "Light must have a photon energy of at least E_g to create an electron–hole pair. For silicon (E_g = 1.1 eV), the longest wavelength that can do so is about:",
        [
         "0.55 µm",
         "2.26 µm",
         "113 nm",
         "1.13 µm"
        ],
        3,
        "λ = hc/E_g = (6.63 × 10⁻³⁴ × 3 × 10⁸)/(1.1 × 1.6 × 10⁻¹⁹) = 1.13 × 10⁻⁶ m, which is in the infrared."
       ],
       [
        "Carbon (diamond), silicon, germanium and tin all have four valence electrons. Tin behaves as a metal while diamond is an insulator because the band gap is:",
        [
         "0.7 eV in tin and 5.4 eV in diamond",
         "5.4 eV in tin and 0 eV in diamond",
         "0 eV in tin and 5.4 eV in diamond",
         "1.1 eV in both"
        ],
        2,
        "Tin has zero gap between the bands, so electrons move freely. Diamond has a gap of 5.4 eV, so thermal excitation is negligible."
       ],
       [
        "The reverse current of a diode is almost independent of the applied voltage because:",
        [
         "It is limited by the battery voltage",
         "Majority carriers carry it",
         "The depletion layer disappears",
         "It is limited by the minority-carrier concentration, which even a small voltage can sweep across"
        ],
        3,
        "Even a small reverse voltage sweeps all the available minority carriers across the junction. More voltage cannot add carriers, so the current saturates."
       ],
       [
        "A student says: “In a vacuum diode the electrons come from the heated plate (anode) and a vacuum is kept so that the electrons are not absorbed by the glass.” What is wrong?",
        [
         "Nothing is wrong with the statement",
         "The electrons come from the heated cathode, and the vacuum prevents them from losing energy in collisions with air molecules",
         "The electrons come from the grid, and the vacuum is needed to keep the cathode cool",
         "Electrons can flow in both directions, so the vacuum is not needed"
        ],
        1,
        "Electrons are supplied by the heated cathode and flow only from cathode to anode. Vacuum avoids energy loss by collision with air molecules."
       ],
       [
        "A cube of side 1 cm is made of a material of conductivity 10⁻² S m⁻¹. The resistance between two opposite faces and the type of the material are:",
        [
         "10² Ω, metal",
         "10⁻⁴ Ω, metal",
         "10⁷ Ω, insulator",
         "10⁴ Ω, semiconductor"
        ],
        3,
        "R = ρl/A = (1/σ)(l/A) = 100 × (10⁻²/10⁻⁴) = 10⁴ Ω. A conductivity of 10⁻² S m⁻¹ lies in the semiconductor range."
       ],
       [
        "Assertion (A): The resistance of an intrinsic semiconductor decreases as its temperature rises.\nReason (R): At higher temperature more electron–hole pairs are generated by thermal energy.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "More electron–hole pairs mean more charge carriers, so the conductivity rises and the resistance falls. R explains A."
       ],
       [
        "A student says: “In an intrinsic semiconductor a hole moves when the free electron in the conduction band falls into it.” What is wrong?",
        [
         "Holes cannot move at all",
         "Holes move only at 0 K",
         "Hole motion is the jump of bound valence electrons into the vacancy, and the free electron moves independently of it",
         "The hole moves in the same direction as the electron it is joined with"
        ],
        2,
        "A bound electron from a nearby covalent bond fills the vacancy, so the vacancy shifts. The free conduction electron is not involved in this process."
       ],
       [
        "Under an applied field, the electron current in an intrinsic semiconductor is 2.4 mA and the hole current is 1.6 mA. The total current is:",
        [
         "0.8 mA",
         "4.0 mA",
         "2.0 mA",
         "3.84 mA"
        ],
        1,
        "Electrons and holes move in opposite directions, but both give current in the same direction. So I = Iₑ + I_h = 4.0 mA."
       ],
       [
        "A doped Si sample has n_i = 1.5 × 10¹⁶ m⁻³ and a hole concentration of 4.5 × 10⁹ m⁻³ at room temperature. The dopant is ___ and its concentration is about ___.",
        [
         "Pentavalent, 5 × 10²² m⁻³",
         "Trivalent, 5 × 10²² m⁻³",
         "Pentavalent, 1.5 × 10¹⁶ m⁻³",
         "Trivalent, 4.5 × 10⁹ m⁻³"
        ],
        0,
        "Here n_h is far below n_i, so electrons are in the majority and the sample is n-type (pentavalent dopant). nₑ = n_i²/n_h = (2.25 × 10³²)/(4.5 × 10⁹) = 5 × 10²² m⁻³ ≈ N_D."
       ],
       [
        "Assertion (A): In an n-type semiconductor, the number of conduction electrons supplied by the donors hardly changes when the temperature rises.\nReason (R): At room temperature almost all the donor atoms are already ionised.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Once nearly every donor has given up its extra electron, a rise in temperature cannot free many more, so the donor contribution stays fixed. R explains A."
       ],
       [
        "The hole concentration in n-type silicon is much below that in the pure crystal because:",
        [
         "Donors capture holes permanently",
         "The donor atoms are neutral",
         "Holes cannot be generated in doped silicon",
         "The extra electrons increase the rate of recombination, so the thermally generated holes are destroyed"
        ],
        3,
        "With many more electrons available, holes meet electrons and recombine more often. This is why nₑn_h = n_i² holds with n_h much smaller than n_i."
       ],
       [
        "In a p-n junction the depletion region is about 0.1 µm thick and the barrier potential is 0.7 V. The average electric field across it is about:",
        [
         "7 × 10⁻⁸ V m⁻¹",
         "7 × 10⁴ V m⁻¹",
         "7 × 10⁶ V m⁻¹",
         "7 × 10⁹ V m⁻¹"
        ],
        2,
        "E = V/d = 0.7/(0.1 × 10⁻⁶) = 7 × 10⁶ V m⁻¹. The field is directed from the n-side to the p-side."
       ],
       [
        "A student says: “At equilibrium there is no current in a p-n junction because no charge carriers cross the junction.” What is wrong?",
        [
         "The current is zero because all carriers are destroyed",
         "Carriers do cross, but the diffusion current and the drift current are equal and opposite, so the net current is zero",
         "Only electrons cross, and holes never do",
         "Carriers cross only when a battery is connected"
        ],
        1,
        "Diffusion carries majority carriers across one way and drift carries minority carriers back. At equilibrium they cancel."
       ],
       [
        "A student says: “I will make a p-n junction by pressing a flat p-type slab firmly against an n-type slab.” What is wrong?",
        [
         "The surface roughness is much larger than the inter-atomic spacing, so there is no continuous atomic contact and the joint acts as a discontinuity for carriers",
         "A p-n junction can be made only from two p-type slabs",
         "Pressing makes both slabs the same type",
         "Nothing is wrong, since a firmly pressed slab gives a perfect junction"
        ],
        0,
        "Even a flat slab has roughness far above the 2 to 3 Å spacing between atoms. A junction has to be made within a single crystal by doping. (NCERT Example 14.3)"
       ],
       [
        "A silicon diode (cut-in voltage 0.7 V, assume a constant 0.7 V drop when conducting) is in series with a 100 Ω resistor and a 3.0 V battery, with the p-side joined to the positive terminal. The current is about:",
        [
         "30 mA",
         "3.7 mA",
         "23 mA",
         "0 mA"
        ],
        2,
        "The diode is forward biased, so I = (3.0 − 0.7)/100 = 23 mA. With the diode reversed, the current would be almost zero."
       ],
       [
        "A diode has a forward current of 20 mA at 0.8 V and a reverse current of 1 µA at −10 V. The ratio of its reverse resistance to its forward resistance (V/I) is about:",
        [
         "2.5 × 10³",
         "2.5 × 10⁴",
         "1.25 × 10⁵",
         "2.5 × 10⁵"
        ],
        3,
        "R_f = 0.8/(20 × 10⁻³) = 40 Ω and R_r = 10/(10⁻⁶) = 10⁷ Ω. The ratio is 10⁷/40 = 2.5 × 10⁵."
       ],
       [
        "Assertion (A): A p-n junction diode can be damaged even when it is forward biased.\nReason (R): If the forward current exceeds the rated value, the diode gets overheated.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "The current must be limited by the external circuit to below the rated value. Beyond it, overheating destroys the junction, in either bias."
       ],
       [
        "A half-wave rectifier uses a silicon diode that drops 0.7 V when conducting. The peak ac input is 20 V and the load is 1 kΩ. The peak load current is:",
        [
         "20 mA",
         "19.3 mA",
         "20.7 mA",
         "14.1 mA"
        ],
        1,
        "The peak output voltage is 20 − 0.7 = 19.3 V. So I = 19.3 V/1 kΩ = 19.3 mA."
       ],
       [
        "The secondary of a transformer supplies 12 V (rms) to a half-wave rectifier. The reverse breakdown voltage of the diode must be at least about:",
        [
         "17 V",
         "12 V",
         "6 V",
         "34 V"
        ],
        0,
        "The diode must withstand the peak reverse voltage, which is 12 × √2 ≈ 17 V. A lower rating risks breakdown."
       ],
       [
        "A student says: “In a centre-tap full-wave rectifier, both diodes conduct at the same time, each giving half of the output.” What is wrong?",
        [
         "Each diode gives the full secondary voltage",
         "Both diodes conduct only in the negative half-cycle",
         "The two diodes conduct in alternate half-cycles, one at a time",
         "Only one diode is ever used"
        ],
        2,
        "When D₁ is forward biased, D₂ is reverse biased, and vice versa. Each diode rectifies one half of the cycle."
       ],
       [
        "A full-wave rectifier of 50 Hz input has a capacitor filter with C = 1000 µF and R_L = 100 Ω. The ratio of the time constant C·R_L to the time between successive output peaks is:",
        [
         "5",
         "10",
         "100",
         "0.1"
        ],
        1,
        "C·R_L = 1000 × 10⁻⁶ × 100 = 0.1 s. The output pulses are at 100 Hz, so the interval is 0.01 s, and the ratio is 10. A large ratio means little ripple."
       ],
       [
        "Assertion (A): For the same C and R_L, the capacitor filter gives a smoother output with a full-wave rectifier than with a half-wave rectifier.\nReason (R): In a full-wave rectifier the capacitor is recharged twice in every input cycle, so it has less time to discharge.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "The pulses come at twice the frequency, so the capacitor voltage falls less between peaks. R explains A."
       ]
      ]
     ]
    }
   ]
  },
  {
   "id": "chemistry",
   "name": "Chemistry",
   "chapters": []
  },
  {
   "id": "maths",
   "name": "Maths",
   "chapters": []
  }
 ]
};

/* Study material shown in the Study tab.
   kind: "notes" or "formulas". file: PDF path inside the repo.
   chapters: [title, first page] pairs for the chapter menu in the viewer (page numbers start at 1). */
window.MATERIALS = [
  { subject: "physics", kind: "notes", title: "Revision notes, Ch 1–8", file: "materials/Class12_Physics_Ch1-8_Revision_Notes.pdf",
    chapters: [["Ch 1 Electric Charges and Fields", 4], ["Ch 2 Electrostatic Potential and Capacitance", 9], ["Ch 3 Current Electricity", 13], ["Ch 4 Moving Charges and Magnetism", 17], ["Ch 5 Magnetism and Matter", 22], ["Ch 6 Electromagnetic Induction", 25], ["Ch 7 Alternating Current", 29], ["Ch 8 Electromagnetic Waves", 33]] },
  { subject: "physics", kind: "notes", title: "Revision notes, Ch 9–14", file: "materials/Class12_Physics_Ch9-14_Revision_Notes.pdf",
    chapters: [["Ch 9 Ray Optics and Optical Instruments", 3], ["Ch 10 Wave Optics", 8], ["Ch 11 Dual Nature of Radiation and Matter", 12], ["Ch 12 Atoms", 16], ["Ch 13 Nuclei", 20], ["Ch 14 Semiconductor Electronics", 24]] },
  { subject: "maths", kind: "notes", title: "Revision notes, Ch 1–6", file: "materials/Class12_Maths_Ch1-6_Revision_Notes.pdf",
    chapters: [["Ch 1 Relations and Functions", 3], ["Ch 2 Inverse Trigonometric Functions", 6], ["Ch 3 Matrices", 9], ["Ch 4 Determinants", 13], ["Ch 5 Continuity and Differentiability", 18], ["Ch 6 Application of Derivatives", 22]] },
  { subject: "maths", kind: "notes", title: "Revision notes, Ch 7–13", file: "materials/Class12_Maths_Ch7-13_Revision_Notes.pdf",
    chapters: [["Ch 7 Integrals", 3], ["Ch 8 Application of Integrals", 16], ["Ch 9 Differential Equations", 19], ["Ch 10 Vector Algebra", 26], ["Ch 11 Three Dimensional Geometry", 32], ["Ch 12 Linear Programming", 36], ["Ch 13 Probability", 39]] },
  { subject: "chemistry", kind: "notes", title: "Revision notes, Ch 1–5", file: "materials/Class12_Chemistry_Ch1-5_Revision_Notes.pdf",
    chapters: [["Ch 1 Solutions", 3], ["Ch 2 Electrochemistry", 7], ["Ch 3 Chemical Kinetics", 11], ["Ch 4 The d- and f-Block Elements", 15], ["Ch 5 Coordination Compounds", 21]] },
  { subject: "chemistry", kind: "notes", title: "Revision notes, Ch 6–10", file: "materials/Class12_Chemistry_Ch6-10_Revision_Notes.pdf",
    chapters: [["Ch 6 Haloalkanes and Haloarenes", 3], ["Ch 7 Alcohols, Phenols and Ethers", 6], ["Ch 8 Aldehydes, Ketones and Carboxylic Acids", 9], ["Ch 9 Amines", 12], ["Ch 10 Biomolecules", 15]] },
  { subject: "physics", kind: "formulas", title: "Formula sheet, Ch 1–8", file: "materials/Class12_Physics_Ch1-8_Formula_Sheet.pdf",
    chapters: [["Ch 1 Electric Charges and Fields", 1], ["Ch 2 Electrostatic Potential and Capacitance", 2], ["Ch 3 Current Electricity", 3], ["Ch 4 Moving Charges and Magnetism", 3], ["Ch 5 Magnetism and Matter", 4], ["Ch 6 Electromagnetic Induction", 5], ["Ch 7 Alternating Current", 5], ["Ch 8 Electromagnetic Waves", 6]] },
  { subject: "physics", kind: "formulas", title: "Formula sheet, Ch 9–14", file: "materials/Class12_Physics_Ch9-14_Formula_Sheet.pdf",
    chapters: [["Ch 9 Ray Optics and Optical Instruments", 1], ["Ch 10 Wave Optics", 2], ["Ch 11 Dual Nature of Radiation and Matter", 3], ["Ch 12 Atoms", 3], ["Ch 13 Nuclei", 4], ["Ch 14 Semiconductor Electronics", 4]] },
  { subject: "maths", kind: "formulas", title: "Formula sheet, Ch 1–6", file: "materials/Class12_Maths_Ch1-6_Formula_Sheet.pdf",
    chapters: [["Ch 1 Relations and Functions", 1], ["Ch 2 Inverse Trigonometric Functions", 2], ["Ch 3 Matrices", 2], ["Ch 4 Determinants", 3], ["Ch 5 Continuity and Differentiability", 4], ["Ch 6 Application of Derivatives", 5]] },
  { subject: "maths", kind: "formulas", title: "Formula sheet, Ch 7–13", file: "materials/Class12_Maths_Ch7-13_Formula_Sheet.pdf",
    chapters: [["Ch 7 Integrals", 2], ["Ch 8 Application of Integrals", 5], ["Ch 9 Differential Equations", 6], ["Ch 10 Vector Algebra", 7], ["Ch 11 Three Dimensional Geometry", 8], ["Ch 12 Linear Programming", 10], ["Ch 13 Probability", 11]] },
  { subject: "chemistry", kind: "formulas", title: "Formula sheet, Ch 1–5", file: "materials/Class12_Chemistry_Ch1-5_Formula_Sheet.pdf",
    chapters: [["Ch 1 Solutions", 1], ["Ch 2 Electrochemistry", 2], ["Ch 3 Chemical Kinetics", 3], ["Ch 4 The d- and f-Block Elements", 3], ["Ch 5 Coordination Compounds", 7]] },
  { subject: "chemistry", kind: "formulas", title: "Reaction sheet, Ch 6–10", file: "materials/Class12_Chemistry_Ch6-10_Reaction_Sheet.pdf",
    chapters: [["Ch 6 Haloalkanes and Haloarenes", 1], ["Ch 7 Alcohols, Phenols and Ethers", 2], ["Ch 8 Aldehydes, Ketones and Carboxylic Acids", 3], ["Ch 9 Amines", 4], ["Ch 10 Biomolecules", 5]] }
];
