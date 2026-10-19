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
